import en from "../../messages/en.json";
import de from "../../messages/de.json";

type Messages = typeof en;

const messages: Record<string, Messages> = { en, de };

export function useTranslations(locale: string | undefined) {
  const msgs = messages[locale ?? "de"] ?? messages.de;

  function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = msgs;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (value as string) ?? key;
  }

  function tRaw<T = unknown>(key: string): T {
    const keys = key.split(".");
    let value: unknown = msgs;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return value as T;
  }

  return { t, tRaw, msgs };
}

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
