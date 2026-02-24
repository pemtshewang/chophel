import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

export default function MyBookPage() {
  return (
    <div className="bg-background-light dark:bg-[#f5efe7] font-display text-slate-900 dark:text-stone-800 antialiased min-h-screen flex flex-col overflow-hidden relative w-full md:max-w-5xl md:mx-auto md:shadow-2xl">
      <Header
        title="My Book"
        subtitle="ངའི་ཕྱག་དཔེ།"
        showLogo={true}
        actions={
          <button className="p-2 rounded-full hover:bg-wood/5 dark:hover:bg-[#eadfce] text-wood dark:text-[#b9893a] transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        }
      />

      <main className="relative z-10 flex-1 overflow-y-auto pb-24 md:pb-10 scrollbar-hide">
        <section className="mt-6 mb-8">
          <div className="px-5 mb-4 flex justify-between items-end">
            <h2 className="font-display text-lg font-bold border-l-4 border-primary-crimson pl-3 text-wood dark:text-slate-200">Collections</h2>
            <button className="text-sm text-primary-crimson font-medium hover:text-wood">View All</button>
          </div>
          <div className="flex overflow-x-auto gap-4 px-5 pb-4 scrollbar-hide snap-x">
            <div className="snap-center shrink-0 w-64 h-36 rounded-lg relative overflow-hidden shadow-md group cursor-pointer border border-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-crimson to-crimson-dark opacity-90"></div>
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-white/80">wb_twilight</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full">5 Prayers</span>
                </div>
                <div>
                  <h3 className="font-display text-white font-bold text-lg leading-tight">Morning Routine</h3>
                  <p className="text-white/70 text-xs mt-1">Daily recitations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-display text-lg font-bold border-l-4 border-primary-crimson pl-3 text-wood dark:text-slate-200">All Saved Prayers</h2>
            <button className="text-primary-crimson p-1 rounded">
              <span className="material-symbols-outlined text-xl">sort</span>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative group rounded-lg overflow-hidden h-24 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-white dark:bg-[#f6efe5] border border-stone-200 dark:border-[#d9cab8] p-4 flex items-center gap-4 rounded-lg z-10">
                <div className="h-12 w-12 rounded-full bg-gold-light/40 flex items-center justify-center text-primary-crimson shrink-0 border border-gold/30">
                  <span className="material-symbols-outlined">auto_stories</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-base truncate text-wood dark:text-[#5f4a45]">Seven Line Prayer</h3>
                  <p className="text-xs text-primary-crimson italic">Guru Rinpoche</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-gray-400 block">Short</span>
                  <span className="material-symbols-outlined text-gray-300 text-sm">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNav activeTab="my-book" />
    </div>
  );
}
