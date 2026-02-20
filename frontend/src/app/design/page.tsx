import BottomNav from "@/components/BottomNav";

export default function DesignPage() {
  return (
    <div className="bg-background-dark min-h-screen font-display text-ivory max-w-md mx-auto shadow-2xl relative overflow-hidden flex flex-col">
      <div className="px-6 py-6 pb-2 pt-12">
        <h1 className="text-3xl font-bold tracking-tight text-primary-gold mb-2">Chöpel Design</h1>
        <p className="text-ivory/70 text-base leading-relaxed">
          Theme: <span className="text-primary-gold font-semibold">Candlelight (Dark)</span>.
          A palette evoking the warmth of a butter lamp.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-10">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent"></span>
            <h2 className="text-sm uppercase tracking-widest text-primary-gold font-bold">Palette</h2>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent"></span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col gap-3">
              <div className="h-16 w-full rounded-lg bg-background-dark border border-white/10 shadow-inner"></div>
              <div className="flex justify-between items-end">
                <span className="text-xs text-white/60">Base</span>
                <span className="text-xs font-mono text-primary-gold">#181611</span>
              </div>
            </div>
            <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col gap-3">
              <div className="h-16 w-full rounded-lg bg-primary-gold shadow-glow"></div>
              <div className="flex justify-between items-end">
                <span className="text-xs text-white/60">Primary</span>
                <span className="text-xs font-mono text-primary-gold">#F4C025</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent"></span>
            <h2 className="text-sm uppercase tracking-widest text-primary-gold font-bold">Sacred Actions</h2>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent"></span>
          </div>
          <div className="space-y-4">
            <button className="w-full h-14 bg-primary-gold text-background-dark font-bold text-lg rounded-xl shadow-glow flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_circle</span>
              Begin Practice
            </button>
            <button className="w-full h-14 bg-crimson-dark/50 border border-primary-gold/30 text-primary-gold font-semibold text-lg rounded-xl flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">volunteer_activism</span>
              Offer Butter Lamp
            </button>
          </div>
        </section>
      </div>

      <BottomNav activeTab="design" />
    </div>
  );
}
