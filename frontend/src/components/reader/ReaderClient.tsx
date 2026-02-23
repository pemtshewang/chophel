"use client";

import { useState } from "react";
import { Prayer } from "@/lib/api";
import Header from "@/components/Header";

export default function ReaderClient({ prayer }: { prayer: Prayer }) {
  const [count, setCount] = useState(21);
  const [theme, setTheme] = useState<"ivory" | "monastery">("monastery");
  const [lang, setLang] = useState<"tib" | "pho" | "eng">("tib");

  return (
    <div className={`font-display transition-colors duration-300 min-h-screen flex flex-col antialiased max-w-md mx-auto shadow-2xl relative ${theme === 'monastery' ? 'bg-monastery-bg text-ivory' : 'bg-background-light text-wood'}`}>
      <Header
        title={prayer.title}
        subtitle={prayer.tibetan}
        showBack={true}
        backHref="/"
        className={theme === 'monastery' ? 'bg-monastery-nav/95 border-b border-tibetan-gold/30' : 'bg-background-light/95 border-b border-stone-200'}
        titleClassName={theme === 'monastery' ? 'text-tibetan-gold' : 'text-wood'}
        subtitleClassName={theme === 'monastery' ? 'text-ivory/70' : 'text-stone-500'}
        actions={
          <button className={`flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${theme === 'monastery' ? 'text-tibetan-gold' : 'text-wood'}`}>
            <span className="material-symbols-outlined text-[24px]">bookmark_border</span>
          </button>
        }
      />

      <div className={`border-b px-4 py-3 flex flex-col gap-3 transition-colors ${theme === 'monastery' ? 'bg-monastery-surface border-white/10' : 'bg-white border-stone-200'}`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex bg-black/5 dark:bg-white/5 rounded-lg p-1 flex-1">
            <button
              onClick={() => setLang("tib")}
              className={`flex-1 rounded py-1 px-2 text-xs font-bold transition-all ${lang === 'tib' ? 'bg-white dark:bg-white/10 shadow-sm' : 'text-stone-500'}`}
            >Tib</button>
            <button
              onClick={() => setLang("pho")}
              className={`flex-1 rounded py-1 px-2 text-xs font-bold transition-all ${lang === 'pho' ? 'bg-white dark:bg-white/10 shadow-sm' : 'text-stone-500'}`}
            >Pho</button>
            <button
              onClick={() => setLang("eng")}
              className={`flex-1 rounded py-1 px-2 text-xs font-bold transition-all ${lang === 'eng' ? 'bg-white dark:bg-white/10 shadow-sm' : 'text-stone-500'}`}
            >Eng</button>
          </div>
          <button
            onClick={() => setTheme(theme === 'ivory' ? 'monastery' : 'ivory')}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-primary-gold/20 text-primary-gold transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">{theme === 'ivory' ? 'dark_mode' : 'light_mode'}</span>
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-5 py-8 pb-48 space-y-10 scroll-smooth">
        {prayer.content?.map((stanza, idx) => (
          <div key={idx} className="space-y-10">
            <article className="flex flex-col gap-4 text-center">
              <div className="space-y-4">
                {(lang === 'tib' || lang === 'pho' || lang === 'eng') && (
                  <p className={`text-2xl leading-relaxed font-tibetan ${theme === 'monastery' ? 'text-tibetan-gold' : 'text-wood'}`}>
                    {stanza.tibetan}
                  </p>
                )}
                {(lang === 'pho' || lang === 'eng') && (
                  <p className="font-display italic text-base text-primary-gold font-medium tracking-wide uppercase">
                    {stanza.phonetic}
                  </p>
                )}
                {lang === 'eng' && (
                  <p className="font-display text-lg leading-relaxed opacity-80">
                    {stanza.english}
                  </p>
                )}
              </div>
            </article>
            {idx < (prayer.content?.length || 0) - 1 && (
              <div className="flex justify-center items-center opacity-60">
                <span className="material-symbols-outlined text-primary-gold text-[24px]">diamond</span>
              </div>
            )}
          </div>
        ))}
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 z-40 max-w-md mx-auto">
        <div className="relative w-full">
          <div className={`backdrop-blur-md rounded-2xl shadow-lg border p-4 flex items-center justify-between pr-2 ${theme === 'monastery' ? 'bg-monastery-surface/90 border-white/10' : 'bg-white/90 border-stone-200'}`}>
            <div className="flex flex-col pl-2">
              <span className="text-xs uppercase tracking-widest opacity-60 font-bold mb-1">Mala Count</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold tabular-nums">{count}</span>
                <span className="text-lg opacity-60 font-medium">/ 108</span>
              </div>
            </div>

            <button className="absolute left-1/2 -translate-x-1/2 -top-4 bg-primary-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform active:scale-95 transition-transform flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">volunteer_activism</span>
              Dedicate
            </button>

            <div className="flex items-center gap-3">
              <button onClick={() => setCount(0)} className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">restart_alt</span>
              </button>
              <button onClick={() => setCount(count + 1)} className="w-14 h-14 rounded-full bg-primary-gold text-white shadow-lg active:scale-95 flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
