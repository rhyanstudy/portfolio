import type { Locale } from '../i18n/types';
import { locales, localizedPath } from '../i18n';

export function parseContentId(id: string): { slug: string; locale: Locale } {
  const separator = id.lastIndexOf('/');
  if (separator === -1) {
    return { slug: id, locale: 'en' };
  }

  const slug = id.slice(0, separator);
  const locale = id.slice(separator + 1);

  if (locale === 'en' || locale === 'pt-br') {
    return { slug, locale };
  }

  return { slug: id, locale: 'en' };
}

export function getContentSlug(id: string): string {
  return parseContentId(id).slug;
}

export function filterByLocale<T extends { id: string }>(items: T[], locale: Locale): T[] {
  return items.filter((item) => parseContentId(item.id).locale === locale);
}

export function findLocalizedEntry<T extends { id: string }>(
  items: T[],
  slug: string,
  locale: Locale,
): T | undefined {
  return items.find((item) => {
    const parsed = parseContentId(item.id);
    return parsed.slug === slug && parsed.locale === locale;
  });
}

export function getAvailableContentLocales<T extends { id: string }>(
  items: T[],
  slug: string,
): Locale[] {
  return items
    .filter((item) => parseContentId(item.id).slug === slug)
    .map((item) => parseContentId(item.id).locale);
}

export function getLocalizedAlternatePath(
  items: { id: string }[],
  slug: string,
  targetLocale: Locale,
  fallbackPath: string,
  contentPath: string,
): string {
  const exists = findLocalizedEntry(items, slug, targetLocale);
  if (exists) {
    return contentPath.replace('{slug}', slug);
  }
  return fallbackPath;
}

export function buildContentAlternates(
  items: { id: string }[],
  slug: string,
  section: 'projects' | 'notes',
): Partial<Record<Locale, string>> {
  const result: Partial<Record<Locale, string>> = {};

  for (const locale of locales) {
    const entry = findLocalizedEntry(items, slug, locale);
    result[locale] = entry
      ? localizedPath(locale, `/${section}/${slug}`)
      : localizedPath(locale, `/${section}`);
  }

  return result;
}
