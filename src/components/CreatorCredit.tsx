import React from 'react';
import { WeddingData } from '../types/wedding';

interface CreatorCreditProps {
  credit: WeddingData['credit'];
}

export const CreatorCredit: React.FC<CreatorCreditProps> = ({ credit }) => {
  if (!credit?.enabled) return null;

  const url = credit.url || credit.instagramUrl || "https://www.kaeonstudios.com/brands/moments";
  const text = credit.text || "Made with love by";
  const linkText = credit.linkText || credit.handle || "Moments by Kaeon";

  return (
    <div className="pt-6 pb-12 text-center">
      <p className="font-sans text-[11px] sm:text-xs text-wedding-muted/80 tracking-widest uppercase">
        {text}{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-pink-500 hover:text-pink-600 hover:underline underline-offset-4 transition-colors"
        >
          {linkText}
        </a>
      </p>
    </div>
  );
};
