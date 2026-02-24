import Link from 'next/link';

const navItems = [
  { href: '/', key: 'home', icon: 'temple_buddhist', label: 'Library' },
  { href: '/categories', key: 'categories', icon: 'grid_view', label: 'Categories' },
  { href: '/my-book', key: 'my-book', icon: 'bookmarks', label: 'My Book' },
  { href: '/profile', key: 'profile', icon: 'account_circle', label: 'Profile' },
] as const;

const linkClasses = (isActive: boolean) =>
  `flex items-center justify-center gap-2 rounded-xl transition-colors ${
    isActive
      ? 'text-primary-crimson bg-primary-crimson/10'
      : 'text-stone-500 hover:text-wood dark:hover:text-stone-200 hover:bg-black/5 dark:hover:bg-white/10'
  }`;

const BottomNav = ({ activeTab }: { activeTab: string }) => {
  return (
    <>
      {/* Mobile bottom tab bar */}
      <nav className="fixed z-50 left-0 right-0 bottom-0 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 px-2 pt-2 pb-safe md:hidden">
        <div className="flex items-end justify-around pb-3">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;

            return (
              <Link key={item.key} href={item.href} className={`${linkClasses(isActive)} flex-col p-2 gap-1`}>
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop/tablet side rail */}
      <nav className="hidden md:flex fixed z-50 left-4 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-2 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border border-stone-200 dark:border-stone-700 rounded-2xl shadow-xl p-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;

            return (
              <Link key={item.key} href={item.href} className={`${linkClasses(isActive)} px-3 py-2 min-w-36 justify-start`}>
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="text-sm font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
