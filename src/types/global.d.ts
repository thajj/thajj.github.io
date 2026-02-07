// Google Analytics gtag (injected by GoogleAnalytics script)
declare global {
  interface Window {
    gtag: (
      ...args: [string, string | Date, Record<string, unknown>?] | [string, string | Date]
    ) => void;
  }
}

export {};
