import React from 'react';

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  inverse?: boolean;
  watermark?: string;
  accentWord?: string; // Word in title to emphasize or highlight
}

export default function SectionHeading({
  id,
  title,
  subtitle,
  badge,
  centered = false,
  inverse = false,
  watermark,
  accentWord
}: SectionHeadingProps) {
  // If we have an accentWord, we can highlight it. Otherwise we display the title normally.
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) {
      return (
        <h2 className={`relative z-10 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
          inverse ? 'text-white' : 'text-deep-navy'
        }`}>
          {title}
          <span className="inline-block ml-1 w-2.5 h-2.5 bg-accent-amber rounded-full animate-pulse" />
        </h2>
      );
    }

    const parts = title.split(accentWord);
    return (
      <h2 className={`relative z-10 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
        inverse ? 'text-white' : 'text-deep-navy'
      }`}>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-amber underline decoration-accent-amber/40 decoration-wavy decoration-2">
          {accentWord}
        </span>
        {parts[1]}
        <span className="inline-block ml-1 w-2.5 h-2.5 bg-accent-amber rounded-full" />
      </h2>
    );
  };

  return (
    <div id={id} className={`relative max-w-3xl mb-14 ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      {/* Decorative Oversized background watermark */}
      {watermark && (
        <span className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 font-display text-7xl font-black text-slate-100/45 dark:text-white/5 tracking-widest select-none pointer-events-none uppercase z-0">
          {watermark}
        </span>
      )}

      {badge && (
        <span className={`relative z-10 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-5 font-mono ${
          inverse 
            ? 'bg-white/10 text-accent-amber border border-white/10 backdrop-blur-sm' 
            : 'bg-brand-blue-light text-brand-blue border border-brand-blue/10 shadow-sm'
        }`}>
          <span className="w-1.5 h-1.5 bg-accent-amber rounded-full animate-ping" />
          {badge}
        </span>
      )}

      {renderTitle()}

      {subtitle && (
        <p className={`relative z-10 text-base sm:text-lg leading-relaxed ${
          inverse ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
