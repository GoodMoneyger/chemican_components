import { useEffect, useRef, useState } from 'react';

/**
 * Reports whether an element's text is cut off by `truncate`, so the full
 * text can be exposed elsewhere (e.g. a tooltip) only when it is needed.
 */
export function useIsTruncated<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const measure = () =>
      setIsTruncated(element.scrollWidth > element.clientWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isTruncated };
}
