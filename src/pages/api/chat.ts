import type { APIRoute } from 'astro';
import { VertexAI } from '@google-cloud/vertexai';

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const userMessage = body.message;

        if (!userMessage) {
            return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
        }

        // Initialize Vertex AI
        // Note: In a real Vercel deployment, authentication can be tricky.
        // Ideally, we use an API Key if using Generative Language API, or Service Account for Vertex.
        // For now, we'll try to initialize with project details provided in env.

        const projectId = import.meta.env.GOOGLE_CLOUD_PROJECT_ID;
        const location = import.meta.env.GOOGLE_CLOUD_LOCATION || 'us-central1';

        if (!projectId) {
            // Fallback for demo/local if not configured
            return new Response(JSON.stringify({
                reply: "I saw a squirrel! It went like this... *screech* (Please configure GOOGLE_CLOUD_PROJECT_ID in .env)"
            }), { status: 200 });
        }

        const vertex_ai = new VertexAI({ project: projectId, location: location });
        const model = 'gemini-pro';

        // Instantiate the model
        const generativeModel = vertex_ai.preview.getGenerativeModel({
            model: model,
            generationConfig: {
                'maxOutputTokens': 256,
                'temperature': 0.9,
                'topP': 1,
            },
        });

        const chat = generativeModel.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: "You are now GIR from Invader Zim. You are a malfunctioning SIR unit. You are hyperactive, love tacos and piggies, and often scream or say random things. You obey your master Zim, but usually mess up. Keep your answers short, chaotic, and funny. Never break character." }]
                },
                {
                    role: 'model',
                    parts: [{ text: "YES MY MASTER! I will make the doom happens! Ooh, look, a penny! *rolls on floor*" }]
                }
            ]
        });

        const result = await chat.sendMessage(userMessage);
        const response = result.response;
        const text = response.candidates[0].content.parts[0].text;

        return new Response(JSON.stringify({ reply: text }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.error('Error processing chat:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500 });
    }
}
