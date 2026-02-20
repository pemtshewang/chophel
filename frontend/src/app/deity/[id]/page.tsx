import BottomNav from "@/components/BottomNav";
import { getDeity } from "@/lib/api";
import Link from "next/link";

export default async function DeityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const deity = await getDeity(id).catch(() => null);

  if (!deity) return <div>Deity not found</div>;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden max-w-md mx-auto shadow-2xl relative min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent max-w-md mx-auto">
        <Link href="/categories" className="text-white flex size-10 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-white text-lg font-bold tracking-tight drop-shadow-md opacity-90">Chöpel</h1>
        <button className="text-white flex size-10 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
          <span className="material-symbols-outlined">share</span>
        </button>
      </header>

      <div className="relative w-full h-[50vh] min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${deity.image}")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-gold/30 text-white text-xs font-sans tracking-wider uppercase border border-primary-gold/40 backdrop-blur-md">
              Deity
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-lg leading-tight">{deity.name}</h1>
          <h2 className="text-2xl text-gold font-normal mb-4 opacity-90 font-tibetan">{deity.tibetan}</h2>
        </div>
      </div>

      <div className="flex-1 relative z-10 -mt-4 bg-background-dark rounded-t-3xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pb-24">
        <div className="px-6 py-8">
          <h3 className="text-gold text-lg font-bold mb-2">{deity.lineage}</h3>
          <p className="text-slate-300 text-base leading-relaxed opacity-90">{deity.description}</p>
        </div>

        <div className="px-4">
          <h3 className="text-white text-lg font-bold mb-4 px-2">Prayers & Mantras</h3>
          <div className="space-y-3">
            {deity.prayers?.map((prayer) => (
              <Link href={`/reader/${prayer.id}`} key={prayer.id}>
                <div className="bg-surface-dark border border-white/5 rounded-xl p-4 flex items-start gap-4 active:bg-white/5 transition-colors cursor-pointer mb-3">
                  <div className="size-12 rounded-lg bg-primary-gold/20 flex items-center justify-center shrink-0 text-primary-gold">
                    <span className="material-symbols-outlined">{prayer.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold text-base truncate pr-2">{prayer.title}</h4>
                    <p className="text-slate-400 text-sm font-sans mt-0.5 truncate">{prayer.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <BottomNav activeTab="categories" />
    </div>
  );
}
