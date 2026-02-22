import { I18N } from 'astrowind:config';

export const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(I18N?.language, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

export const getFormattedDate = (date: Date): string => (date ? formatter.format(date) : '');

export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

export const toUiAmount = (amount: number): string => {
  if (!amount) return '0';

  if (amount >= 1000000000) {
    const formattedNumber = (amount / 1000000000).toFixed(1);
    return Number(formattedNumber) === parseInt(formattedNumber, 10)
      ? `${parseInt(formattedNumber, 10)}B`
      : `${formattedNumber}B`;
  }
  if (amount >= 1000000) {
    const formattedNumber = (amount / 1000000).toFixed(1);
    return Number(formattedNumber) === parseInt(formattedNumber, 10)
      ? `${parseInt(formattedNumber, 10)}M`
      : `${formattedNumber}M`;
  }
  if (amount >= 1000) {
    const formattedNumber = (amount / 1000).toFixed(1);
    return Number(formattedNumber) === parseInt(formattedNumber, 10)
      ? `${parseInt(formattedNumber, 10)}K`
      : `${formattedNumber}K`;
  }

  return Number(amount).toFixed(0);
};
