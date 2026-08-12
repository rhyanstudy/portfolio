import type { Locale } from '../i18n/types';

const dateLocales: Record<Locale, string> = {
  en: 'en-US',
  'pt-br': 'pt-BR',
};

export function formatDate(date: Date, locale: Locale = 'en'): string {
  return date.toLocaleDateString(dateLocales[locale], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDateShort(date: Date, locale: Locale = 'en'): string {
  return date.toLocaleDateString(dateLocales[locale], {
    year: 'numeric',
    month: 'short',
  });
}

export function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function filterPublished<T extends { data: { draft?: boolean } }>(items: T[]): T[] {
  return items.filter((item) => !item.data.draft);
}
