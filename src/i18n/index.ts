import { en } from './en';
import { ptBr } from './pt-br';
import { defaultLocale, locales, type Locale, type Translations } from './types';

export { defaultLocale, locales, type Locale, type Translations };

const translations: Record<Locale, Translations> = {
  en,
  'pt-br': ptBr,
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocale(value: string | undefined): Locale {
  if (value && isValidLocale(value)) return value;
  return defaultLocale;
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function localizedPath(locale: Locale, path = ''): string {
  const normalized = path.startsWith('/') ? path : path ? `/${path}` : '';
  if (!normalized || normalized === '/') return `/${locale}/`;
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|pt-br)(?=\/|$)/, '');
  return stripped || '/';
}

export function switchLocalePath(
  _currentLocale: Locale,
  targetLocale: Locale,
  pathname: string,
): string {
  const pathWithoutLocale = stripLocaleFromPath(pathname);
  return localizedPath(targetLocale, pathWithoutLocale === '/' ? '' : pathWithoutLocale);
}

export function getLocaleStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export function getAlternateLinks(
  siteUrl: string,
  pathname: string,
  availableLocales: Locale[] = [...locales],
) {
  return availableLocales.map((locale) => ({
    locale,
    href: new URL(localizedPath(locale, stripLocaleFromPath(pathname)), siteUrl).href,
    hreflang: locale === 'pt-br' ? 'pt-BR' : 'en',
  }));
}

export function getStatusLabel(
  t: Translations,
  status: 'completed' | 'in-progress' | 'archived',
): string {
  return t.status[status];
}
