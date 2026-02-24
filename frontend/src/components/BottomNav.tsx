import Link from 'next/link';

const navItems = [
  { href: '/', key: 'home', icon: 'temple_buddhist', label: 'Library' },
  { href: '/categories', key: 'categories', icon: 'grid_view', label: 'Categories' },
  { href: '/my-book', key: 'my-book', icon: 'bookmarks', label: 'My Book' },
  { href: '/profile', key: 'profile', icon: 'account_circle', label: 'Profile' },
] as const;

const itemClasses = (isActive: boolean) =>
  `flex items-center justify-center gap-2 rounded-lg transition-colors ${
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
              <Link key={item.key} href={item.href} className={`${itemClasses(isActive)} flex-col p-2 gap-1`}>
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop top navigation links */}
      <nav className="hidden md:block fixed top-20 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-1 rounded-2xl border border-stone-200/80 dark:border-stone-700 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-lg p-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`${itemClasses(isActive)} px-3 py-2`}
              >
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
