/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GTM_ID?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_LEAD_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export {};