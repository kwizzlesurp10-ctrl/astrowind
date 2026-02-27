# AstroWind Project Overview

AstroWind is a free and open-source template for building websites using Astro 5.0 and Tailwind CSS. It is designed to be production-ready, focusing on web best practices, performance, and SEO. The project leverages Astro's static site generation capabilities and Tailwind CSS for rapid and consistent styling.

## Key Technologies

- **Astro 5.0**: The core static site generator, providing excellent performance and a modern development experience.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.
- **TypeScript**: Used for type safety and improved developer experience.
- **MDX**: For writing content with JSX components.
- **Vite**: Powers the development server and build process.
- **ESLint & Prettier**: For code linting and formatting, ensuring consistent code style.

## Architecture and Structure

The project follows a standard Astro project structure:

- **`public/`**: Contains static assets that are served directly.
- **`src/`**: The main source directory.
  - **`src/assets/`**: Images, favicons, and global stylesheets.
  - **`src/components/`**: Reusable Astro, React, Vue, Svelte, or Preact components, categorized further into `blog`, `common`, `ui`, and `widgets`.
  - **`src/content/`**: Markdown and MDX content for blog posts, configured via `src/content/config.ts`.
  - **`src/layouts/`**: Astro layouts (e.g., `Layout.astro`, `PageLayout.astro`) that define the overall structure of pages.
  - **`src/pages/`**: Astro pages (`.astro`, `.md`, `.mdx`) that define routes and render content using layouts and components.
  - **`src/utils/`**: Utility functions, including `permalinks.ts` for URL generation.
  - **`src/config.yaml`**: A central configuration file for site metadata, SEO, i18n, and blog settings.
  - **`src/navigation.ts`**: Defines the header and footer navigation links.
- **`astro.config.ts`**: The main Astro configuration, including integrations, image settings, and markdown plugins.
- **`tailwind.config.js`**: Tailwind CSS configuration, including custom colors, fonts, and plugins.
- **`package.json`**: Lists project dependencies and scripts.

## Building and Running

All commands are run from the root of the project.

- **Install dependencies**:
  ```bash
  npm install
  ```
- **Start local development server**:
  ```bash
  npm run dev
  ```
  (Accessible at `localhost:4321`)
- **Build for production**:
  ```bash
  npm run build
  ```
  (Output files are located in the `./dist/` folder)
- **Preview production build locally**:
  ```bash
  npm run preview
  ```
- **Check for errors (Astro, ESLint, Prettier)**:
  ```bash
  npm run check
  ```
- **Fix ESLint and Prettier issues**:
  ```bash
  npm run fix
  ```

## Configuration

The project is highly configurable through `src/config.yaml` for general site settings and SEO, and `astro.config.ts` for Astro-specific integrations and build processes. Tailwind CSS styling can be customized via `tailwind.config.js`.

- **`src/config.yaml`**: Manages site name, URL, SEO metadata (title, description, Open Graph, Twitter cards), internationalization (i18n), blog settings (enabled, posts per page, permalink structure, categories, tags), and analytics.
- **`astro.config.ts`**: Configures Astro integrations (Sitemap, MDX, Partytown, Icon, Compress), image optimization, and markdown remark/rehype plugins for enhanced content processing.
- **`tailwind.config.js`**: Allows customization of Tailwind's default theme, including custom colors, font families, and extends with custom animations and plugins.

## Development Conventions

- **Styling**: Primarily uses Tailwind CSS. Custom styles and overrides are defined in `src/assets/styles/tailwind.css` and `tailwind.config.js`. Variables are used for consistent theming.
- **Markdown/MDX**: Supports MDX for rich content. Custom remark and rehype plugins are used for reading time calculation, responsive tables, and lazy image loading.
- **Navigation**: Defined in `src/navigation.ts`, dynamically generating links using utility functions from `src/utils/permalinks.ts`.
- **Components**: Organized into logical directories within `src/components/`, promoting reusability.

## License

This project is licensed under the MIT License. See `LICENSE.md` for details.
