import Link from 'next/link';

const navItems = [
  { href: '/', key: 'home', icon: 'temple_buddhist', label: 'Library' },
  { href: '/categories', key: 'categories', icon: 'grid_view', label: 'Categories' },
  { href: '/my-book', key: 'my-book', icon: 'bookmarks', label: 'My Book' },
  { href: '/profile', key: 'profile', icon: 'account_circle', label: 'Profile' },
] as const;

const BottomNav = ({ activeTab }: { activeTab: string }) => {
  return (
    <nav className="fixed bottom-0 w-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 pb-safe pt-2 px-2 z-40 left-0 right-0 md:hidden">
      <div className="flex justify-around items-end pb-3">
        <Link href="/" className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'home' ? 'text-primary-crimson' : 'text-stone-500'}`}>
          <span className="material-symbols-outlined text-2xl">temple_buddhist</span>
          <span className="text-[10px] font-medium">Library</span>
        </Link>
        <Link href="/categories" className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'categories' ? 'text-primary-crimson' : 'text-stone-500'}`}>
          <span className="material-symbols-outlined text-2xl">grid_view</span>
          <span className="text-[10px] font-medium">Categories</span>
        </Link>
        <Link href="/my-book" className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'my-book' ? 'text-primary-crimson' : 'text-stone-500'}`}>
          <span className="material-symbols-outlined text-2xl">bookmarks</span>
          <span className="text-[10px] font-medium">My Book</span>
        </Link>
        <Link href="/profile" className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'profile' ? 'text-primary-crimson' : 'text-stone-500'}`}>
          <span className="material-symbols-outlined text-2xl">account_circle</span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
