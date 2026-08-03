export type AnalyticsParameters = Record<
  string,
  string | number | boolean | null | undefined
>;

const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

function removeEmptyValues(parameters: AnalyticsParameters) {
  return Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => {
      return value !== undefined && value !== null && value !== "";
    }),
  );
}

export function getAttribution(): AnalyticsParameters {
  if (typeof window === "undefined") {
    return {};
  }

  const searchParams = new URLSearchParams(window.location.search);

  const currentAttribution: AnalyticsParameters = {};

  attributionKeys.forEach((key) => {
    const value = searchParams.get(key);

    if (value) {
      currentAttribution[key] = value;
    }
  });

  let storedAttribution: AnalyticsParameters = {};

  try {
    const storedValue = sessionStorage.getItem("scalehub_attribution");

    if (storedValue) {
      storedAttribution = JSON.parse(storedValue) as AnalyticsParameters;
    }
  } catch {
    storedAttribution = {};
  }

  const attribution = {
    ...storedAttribution,
    ...currentAttribution,
  };

  try {
    sessionStorage.setItem(
      "scalehub_attribution",
      JSON.stringify(attribution),
    );
  } catch {
    // O rastreamento continua funcionando mesmo sem sessionStorage.
  }

  return attribution;
}

export function initGtm() {
  if (typeof window === "undefined") {
    return;
  }

  const gtmId = import.meta.env.VITE_GTM_ID?.trim();

  if (!gtmId) {
    if (import.meta.env.DEV) {
      console.info(
        "GTM não iniciado. Configure VITE_GTM_ID no arquivo .env.local.",
      );
    }

    return;
  }

  const existingScript = document.querySelector(
    `script[data-gtm-id="${gtmId}"]`,
  );

  if (existingScript) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const script = document.createElement("script");

  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(
    gtmId,
  )}`;

  script.dataset.gtmId = gtmId;

  document.head.appendChild(script);
}

export function trackEvent(
  eventName: string,
  parameters: AnalyticsParameters = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  const eventData = {
    event: eventName,
    ...getAttribution(),
    ...removeEmptyValues(parameters),
  };

  window.dataLayer.push(eventData);

  if (import.meta.env.DEV) {
    console.info("[Scale Hub Analytics]", eventData);
  }
}