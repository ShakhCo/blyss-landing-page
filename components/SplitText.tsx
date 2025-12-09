'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

function CharacterSpan({
  char,
  index,
  total,
  scrollYProgress
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const centerIndex = total / 2;
  const distanceFromCenter = Math.abs(index - centerIndex) / centerIndex;
  const rotationDirection = index < centerIndex ? -1 : 1;

  // Characters closer to center animate first (wave from center)
  const startOffset = distanceFromCenter * 0.35;
  const endOffset = 0.4 + distanceFromCenter * 0.25;

  // Single animated value - CSS handles all derived properties
  const progress = useTransform(
    scrollYProgress,
    [startOffset, endOffset],
    [0, 1]
  );

  if (char === ' ') {
    return <span className="inline-block w-[0.25em]" />;
  }

  return (
    <motion.span
      className="inline-block origin-bottom split-text-char"
      style={{
        '--progress': progress,
        '--rotate-dir': rotationDirection,
      } as React.CSSProperties}
    >
      {char}
    </motion.span>
  );
}

export function SplitText({ text, className = '', as: Component = 'h2' }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "start 0.5"]
  });

  const wordsData = useMemo(() => {
    const words = text.split(' ');
    let charIndex = 0;
    const totalChars = text.replace(/\s/g, '').length;

    return {
      words: words.map(word => ({
        word,
        chars: word.split('').map(char => ({
          char,
          index: charIndex++
        }))
      })),
      totalChars
    };
  }, [text]);

  return (
    <div ref={containerRef}>
      <Component className={className}>
        {wordsData.words.map((wordData, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordData.chars.map((charData, charIndex) => (
              <CharacterSpan
                key={charIndex}
                char={charData.char}
                index={charData.index}
                total={wordsData.totalChars}
                scrollYProgress={scrollYProgress}
              />
            ))}
            {wordIndex < wordsData.words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </Component>
    </div>
  );
}
