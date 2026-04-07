import { useEffect, useRef, useState } from "react";

/**
 * Parses a stat value string like "+80%", "687.5k€", "-44%", "15.2€", "556"
 * Returns { prefix, number, suffix } so we can animate the number.
 */
export function parseStatValue(value: string): {
  prefix: string;
  numericValue: number;
  decimals: number;
  suffix: string;
} {
  const match = value.match(/^([+\-]?)(\d+(?:[.,]\d+)?)(.*?)$/);
  if (!match) return { prefix: "", numericValue: 0, decimals: 0, suffix: value };

  const prefix = match[1];
  const numStr = match[2].replace(",", ".");
  const numericValue = parseFloat(numStr);
  const decimalPart = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const suffix = match[3];

  return { prefix, numericValue, decimals: decimalPart, suffix };
}

export function useCountUp(target: number, duration: number, start: boolean, decimals = 0) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, start, decimals]);

  return value;
}
