export function trackEvent(eventName, params = {}) {
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;
  
    const cleanedParams = Object.fromEntries(
      Object.entries(params).filter(
        ([, value]) => value !== undefined && value !== null
      )
    );
  
    window.gtag("event", eventName, cleanedParams);
  }