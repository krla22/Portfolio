"use client";
import { useState } from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  desktop: string;
  mobile?: string;
};

export default function LighthouseReport({ title, desktop, mobile }: Props) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  const src = view === 'mobile' && mobile ? mobile : desktop;

  return (
    <div className="mt-4">
      {mobile && (
        <div role="tablist" aria-label="Report type" className="mb-3 inline-flex rounded-md border border-line p-1">
          {(['desktop', 'mobile'] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={view === option}
              onClick={() => setView(option)}
              className={`rounded px-3 py-1.5 text-sm font-semibold capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal ${
                view === option ? 'bg-royal text-white' : 'text-body hover:text-heading'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div className="max-w-3xl overflow-hidden rounded-xl border border-line bg-white">
        <Image
          key={src}
          src={src}
          alt={`Lighthouse ${view} report for ${title}`}
          width={0}
          height={0}
          sizes="(min-width: 1024px) 768px, 100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
