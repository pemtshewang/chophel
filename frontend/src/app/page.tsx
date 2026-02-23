import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { getPrayers } from "@/lib/api";
import Link from "next/link";

export default async function BrowsePage() {
  const prayers = await getPrayers().catch(() => []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col relative overflow-hidden max-w-md mx-auto shadow-2xl">
      <Header
        title="Library"
        subtitle="ཆོས་མཛོད།"
        showLogo={true}
        actions={
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-wood/5 dark:hover:bg-primary-gold/10 text-wood dark:text-primary-gold transition-colors">
            <span className="material-symbols-outlined">tune</span>
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto px-4 pb-24 pt-4 space-y-4">
        <div className="relative mb-6">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 material-symbols-outlined">search</span>
          <input
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white dark:bg-stone-900 dark:border-stone-700 outline-none text-sm shadow-sm focus:ring-2 focus:ring-primary-gold/20 transition-all"
            placeholder="Search prayers, deities..."
            type="text"
          />
        </div>

        {prayers.map((prayer) => (
          <Link href={`/reader/${prayer.id}`} key={prayer.id}>
            <article className="relative bg-white dark:bg-stone-800 rounded-xl border border-gold/40 dark:border-gold/20 shadow-sm p-4 flex gap-4 transition-transform active:scale-[0.99] mb-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary-crimson flex items-center justify-center border-2 border-gold/30 shadow-inner">
                  <span className="material-symbols-outlined text-yellow-200 text-2xl">{prayer.icon}</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-lg text-wood dark:text-stone-100 leading-tight">{prayer.title}</h3>
                    <p className="font-tibetan text-base text-wood/80 dark:text-stone-300 mt-1">{prayer.tibetan}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mt-1">{prayer.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-300">{prayer.lineage}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-primary-crimson/10 text-primary-crimson border border-primary-crimson/20 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px]">schedule</span> {prayer.duration}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </main>

      <BottomNav activeTab="home" />
    </div>
  );
}
