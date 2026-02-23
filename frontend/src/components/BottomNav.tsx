import Link from 'next/link';

const navItems = [
  { href: '/', key: 'home', icon: 'temple_buddhist', label: 'Library' },
  { href: '/categories', key: 'categories', icon: 'grid_view', label: 'Categories' },
  { href: '/my-book', key: 'my-book', icon: 'bookmarks', label: 'My Book' },
  { href: '/profile', key: 'profile', icon: 'account_circle', label: 'Profile' },
] as const;

const BottomNav = ({ activeTab }: { activeTab: string }) => {
  return (
    <nav className="fixed z-50 left-0 right-0 bottom-0 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 px-2 pt-2 pb-safe md:left-1/2 md:-translate-x-1/2 md:right-auto md:bottom-5 md:w-auto md:px-3 md:py-2 md:rounded-2xl md:border md:shadow-xl">
      <div className="flex items-end justify-around md:items-center md:gap-1 pb-3 md:pb-0">
        {navItems.map((item) => {
          const isActive = activeTab === item.key;

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors md:flex-row md:gap-2 md:px-3 md:py-2 ${
                isActive
                  ? 'text-primary-crimson md:bg-primary-crimson/10'
                  : 'text-stone-500 hover:text-wood dark:hover:text-stone-200'
              }`}
            >
              <span className="material-symbols-outlined text-2xl md:text-[20px]">{item.icon}</span>
              <span className="text-[10px] font-medium md:text-sm md:font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
