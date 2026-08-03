import {
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { trackEvent } from "../lib/analytics";

interface TrackedSectionProps
  extends HTMLAttributes<HTMLElement> {
  id: string;
  sectionName?: string;
  children: ReactNode;
}

export function TrackedSection({
  id,
  sectionName,
  children,
  className = "",
  ...props
}: TrackedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    let hasTracked = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked) {
          hasTracked = true;

          trackEvent("section_view", {
            section_name: sectionName ?? id,
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [id, sectionName]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
      {...props}
    >
      {children}
    </section>
  );
}