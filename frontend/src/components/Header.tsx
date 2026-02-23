import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  backHref?: string;
  showLogo?: boolean;
  actions?: React.ReactNode;
  transparent?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  backHref = '/',
  showLogo = false,
  actions,
  transparent = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const defaultBg = transparent
    ? 'bg-gradient-to-b from-black/80 to-transparent'
    : 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-wood/10 dark:border-primary-gold/20 shadow-sm';

  return (
    <header className={`sticky top-0 z-50 ${className || defaultBg}`}>
      {!transparent && !className && <div className="h-1.5 w-full bg-gradient-to-r from-wood via-primary-gold to-wood"></div>}
      <div className={`px-4 ${transparent ? 'py-4' : 'py-3'} flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          {showBack ? (
            <Link
              href={backHref}
              className={`${transparent ? 'text-white bg-black/20' : 'text-wood dark:text-primary-gold hover:bg-wood/5 dark:hover:bg-primary-gold/10'} flex size-10 items-center justify-center rounded-full backdrop-blur-sm transition-colors`}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
          ) : showLogo ? (
            <div className="h-10 w-10 rounded-full bg-wood flex items-center justify-center text-primary-gold shadow-inner border border-primary-gold/30">
              <span className="material-symbols-outlined !text-2xl">temple_buddhist</span>
            </div>
          ) : null}

          <div className="flex flex-col">
            <h1 className={`font-display font-bold ${titleClassName || (transparent ? 'text-white text-lg drop-shadow-md' : 'text-wood dark:text-primary-gold text-lg')} leading-none tracking-tight`}>
              {title}
            </h1>
            {subtitle && (
              <span className={`text-xs ${subtitleClassName || (transparent ? 'text-primary-gold opacity-90' : 'text-slate-500 dark:text-slate-400')} font-tibetan leading-none mt-1`}>
                {subtitle}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {actions}
        </div>
      </div>
    </header>
  );
};

export default Header;
