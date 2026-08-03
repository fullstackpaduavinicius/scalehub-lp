import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

const scrollPoints = [25, 50, 75, 90];

export function usePageTracking() {
  useEffect(() => {
    const trackedPoints = new Set<number>();

    function handleScroll() {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        return;
      }

      const scrollPercentage = Math.round(
        (window.scrollY / documentHeight) * 100,
      );

      scrollPoints.forEach((point) => {
        if (
          scrollPercentage >= point &&
          !trackedPoints.has(point)
        ) {
          trackedPoints.add(point);

          trackEvent("scroll_depth", {
            percent_scrolled: point,
          });
        }
      });
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}