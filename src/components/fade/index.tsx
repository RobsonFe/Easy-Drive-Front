import { useEffect, useRef, ReactNode } from 'react';

interface FadeSectionProps {
  children: ReactNode;
}

export default function FadeSection({ children }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Define a opacidade diretamente com base na visibilidade (intersectionRatio)
        if(ref.current) {
          ref.current.style.opacity = String(entry.intersectionRatio);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transition: 'opacity 0.5s ease-in-out', opacity: 0 }}
    >
      {children}
    </div>
  );
}
