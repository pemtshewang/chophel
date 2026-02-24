import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { getCategories } from "@/lib/api";

export default async function CategoriesPage() {
  const categories = await getCategories().catch(() => []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased w-full md:max-w-6xl md:mx-auto md:shadow-2xl relative">
      <Header
        title="Categories"
        subtitle="ཆོས་ཚན་ཁག་"
        showLogo={true}
        actions={
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-wood/5 dark:hover:bg-[#eadfce] text-wood dark:text-[#b9893a] transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        }
      />

      <main className="flex-1 pb-24 md:pb-10">
        <div className="relative px-5 md:px-8 pt-8 pb-6 text-center md:text-left">
          <h2 className="font-display text-3xl font-bold text-wood dark:text-stone-100 mb-1">All Categories</h2>
          <h3 className="text-2xl font-tibetan text-wood dark:text-primary-gold opacity-90">ཆོས་ཚན་ཡོངས་རྫོགས།</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-5 md:px-8">
          {categories.map((cat) => (
            <div key={cat.id} className={`group relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg ${cat.color || 'bg-stone-500'}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="relative z-20 h-full flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-white/10">{cat.count} Prayers</span>
                  <span className="material-symbols-outlined text-white/80">{cat.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-white text-2xl font-bold drop-shadow-md">{cat.name}</h3>
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
