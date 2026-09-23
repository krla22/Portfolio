"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Mail, Github, Linkedin, X, Menu, FileText } from 'lucide-react';
import { site, navItems } from '../lib/site';

function isNavItemActive(item: { href: string }, pathname: string, activeSection: string) {
  if (item.href.startsWith('/#')) {
    return pathname === '/' && activeSection === item.href.slice(2);
  }
  return pathname.startsWith(item.href);
}

function NavList({
  pathname,
  activeSection,
  onNavigate,
}: {
  pathname: string;
  activeSection: string;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label="Primary">
      <ul className="flex flex-col">
        {navItems.map((item) => {
          const active = isNavItemActive(item, pathname, activeSection);
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? 'true' : undefined}
                className={`block border-l-2 py-2 pl-4 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-light ${
                  active
                    ? 'border-royal-light text-white'
                    : 'border-ink-line text-ink-text hover:border-royal-light hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ResumeButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={site.resume}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-royal px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-royal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${className}`}
    >
      <FileText size={16} aria-hidden="true" />
      <span>Resume (PDF)</span>
    </a>
  );
}

function SocialLinks() {
  const links = [
    { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
    { href: site.github, label: 'GitHub', Icon: Github, external: true },
    { href: `mailto:${site.email}`, label: 'Email', Icon: Mail, external: false },
  ];

  return (
    <div className="flex items-center gap-5">
      {links.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="rounded-sm text-ink-text transition-colors hover:text-royal-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-light"
          aria-label={label}
        >
          <Icon size={20} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = navItems
      .filter((item) => item.href.startsWith('/#'))
      .map((item) => item.href.slice(2));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-royal focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="min-h-screen lg:flex">
        {/* Mobile / tablet header */}
        <header className="sticky top-0 z-40 bg-ink lg:hidden">
          <div className="flex items-center justify-between px-5 py-3">
            <Link href="/" className="font-serif text-xl font-medium text-white">
              {site.name}
            </Link>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="-mr-2 p-2 text-ink-text transition-colors hover:text-white"
            >
              {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-ink-line px-5 pb-6 pt-4">
              <NavList
                pathname={pathname}
                activeSection={activeSection}
                onNavigate={() => setMenuOpen(false)}
              />
              <div className="mt-6 flex items-center justify-between gap-4">
                <ResumeButton />
                <SocialLinks />
              </div>
            </div>
          )}
        </header>

        {/* Desktop sidebar */}
        <aside className="hidden bg-ink lg:sticky lg:top-0 lg:block lg:h-screen lg:w-80 lg:flex-shrink-0 xl:w-96">
          <div className="flex h-full flex-col justify-between overflow-y-auto p-10">
            <div>
              <Link href="/" className="block font-serif text-3xl font-medium leading-tight text-white">
                {site.name}
              </Link>
              <p className="mt-2 text-sm font-semibold text-royal-light">{site.role}</p>
              <p className="mt-1 text-sm text-ink-text">{site.headline}</p>

              <div className="mt-10">
                <NavList pathname={pathname} activeSection={activeSection} />
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <ResumeButton className="w-full" />
              <SocialLinks />
            </div>
          </div>
        </aside>

        <main id="main-content" className="min-w-0 flex-1 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
            {children}
            <footer className="mt-20 border-t border-line pt-8">
              <p className="text-center text-sm text-muted">
                &copy; {new Date().getFullYear()} {site.name}
              </p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
