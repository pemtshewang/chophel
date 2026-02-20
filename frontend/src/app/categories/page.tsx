import BottomNav from "@/components/BottomNav";
import { getCategories } from "@/lib/api";

export default async function CategoriesPage() {
  const categories = await getCategories().catch(() => []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased max-w-md mx-auto shadow-2xl relative">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-wood/10 dark:border-primary-gold/20 shadow-sm">
        <div className="h-1.5 w-full bg-gradient-to-r from-wood via-primary-gold to-wood"></div>
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-wood flex items-center justify-center text-primary-gold shadow-inner border border-primary-gold/30">
              <span className="material-symbols-outlined !text-2xl">temple_buddhist</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-wood dark:text-primary-gold font-bold text-lg leading-none tracking-tight">Chöpel</h1>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-tibetan leading-none mt-1">ཆོས་འཕེལ།</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-24">
        <div className="relative px-5 pt-8 pb-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">All Categories</h2>
          <h3 className="text-2xl font-tibetan text-wood dark:text-primary-gold opacity-90">ཆོས་ཚན་ཡོངས་རྫོགས།</h3>
        </div>

        <div className="grid grid-cols-1 gap-5 px-5">
          {categories.map((cat) => (
            <div key={cat.id} className={`group relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg ${cat.color || 'bg-stone-500'}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="relative z-20 h-full flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-white/10">{cat.count} Prayers</span>
                  <span className="material-symbols-outlined text-white/80">{cat.icon}</span>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold drop-shadow-md">{cat.name}</h3>
                  <p className="text-white/90 text-lg font-tibetan mt-0.5 drop-shadow-md">{cat.tibetan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav activeTab="categories" />
    </div>
  );
}
