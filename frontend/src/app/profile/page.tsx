import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import Link from "next/link";

export default function ProfilePage() {
  const menuItems = [
    { icon: "bookmarks", label: "Saved Prayers", href: "/my-book" },
    { icon: "history", label: "Practice History", href: "#" },
    { icon: "settings", label: "App Settings", href: "#" },
    { icon: "info", label: "About Chöpel", href: "#" },
    { icon: "help", label: "Help & Support", href: "#" },
  ];

  return (
    <div className="bg-background-light dark:bg-[#f5efe7] text-slate-900 dark:text-stone-800 min-h-screen flex flex-col antialiased w-full md:max-w-5xl md:mx-auto md:shadow-2xl relative">
      <Header
        title="Profile"
        subtitle="གང་ཟག་གི་གནས་ཚུལ།"
        showLogo={true}
        actions={
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-wood/5 dark:hover:bg-[#eadfce] text-wood dark:text-[#b9893a] transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        }
      />

      <main className="flex-1 overflow-y-auto pb-24 md:pb-10">
        {/* User Info Section */}
        <section className="px-6 py-8 flex flex-col items-center border-b border-stone-100 dark:border-[#dfd1bf]/50">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-primary-gold flex items-center justify-center text-white text-4xl font-bold border-4 border-white dark:border-[#dfd1bf] shadow-lg overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrPAMNGkAlRTXw6uU7xFvcKFlEuhG3F8t0xKsiyQmPtnPcJxpH1A2BP4T6XKyYmMPzwoLHfiILAkvYVoNJv7LuoeYn5EOLoe-LB8easnTKqhLZY9GtwDX7kDF9lBA4tLvcSJe9CU1bZHG_UFOdk-GRo6_58sqDy_4GZtGU1q6eSQMqtIXnnrduMCkJpCPmgZR8Iy8Cv5ubHugPE-GkUIOjHIucVKIucr5vIHt4f8bMeSpX95-cUHsTXc5niC9HdpF9wTNIg4RO1D8"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-primary-crimson text-white p-1.5 rounded-full shadow-md hover:bg-wood transition-colors">
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <h2 className="font-display text-xl font-bold text-wood dark:text-[#5f4a45]">Dharma Practitioner</h2>
          <p className="text-sm text-stone-500 dark:text-[#8f776f]">practitioner@chopel.org</p>
        </section>

        {/* Options List */}
        <section className="py-4">
          <div className="px-6 mb-2">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">General</h3>
          </div>
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center justify-between px-6 py-4 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-[#f6efe5] flex items-center justify-center text-wood dark:text-[#b9893a] group-hover:bg-primary-crimson group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="font-medium text-stone-700 dark:text-[#7a625a]">{item.label}</span>
                </div>
                <span className="material-symbols-outlined text-stone-300 dark:text-stone-600 group-hover:text-primary-crimson transition-colors">chevron_right</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Danger Zone */}
        <section className="py-4 mt-4 border-t border-stone-100 dark:border-[#dfd1bf]/50">
          <button className="flex items-center justify-between w-full px-6 py-4 text-primary-crimson hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
                <span className="material-symbols-outlined">logout</span>
              </div>
              <span className="font-bold">Log Out</span>
            </div>
          </button>
        </section>

        {/* App Info */}
        <section className="px-6 py-8 text-center">
          <p className="text-xs text-stone-400">Chöpel Library v1.0.0</p>
          <p className="text-[10px] text-stone-300 mt-1 uppercase tracking-[0.2em]">Blessings for all beings</p>
        </section>
      </main>

      <BottomNav activeTab="profile" />
    </div>
  );
}
