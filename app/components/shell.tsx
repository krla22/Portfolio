"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, X, Menu, Download, ExternalLink } from 'lucide-react';
import { site, navItems } from '../lib/site';

function isNavItemActive(item: { href: string }, pathname: string, activeSection: string) {
  if (item.href.startsWith('/#')) {
    return pathname === '/' && activeSection === item.href.slice(2);
  }
  return pathname === item.href;
}

function NavList({
  pathname,
  activeSection,
  onNavigate,
  onResumeClick,
}: {
  pathname: string;
  activeSection: string;
  onNavigate?: () => void;
  onResumeClick: () => void;
}) {
  return (
    <nav aria-label="Primary" className="flex flex-col space-y-1">
      {navItems.map((item) => {
        const active = isNavItemActive(item, pathname, activeSection);
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? 'true' : undefined}
            className={`group flex items-baseline gap-3 py-2 border-b transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-ink-2 ${
              active ? 'border-moss text-paper' : 'border-line/60 text-bone hover:text-paper'
            }`}
          >
            <span
              className={`font-mono text-xs transition-colors ${
                active ? 'text-moss' : 'text-moss/90 group-hover:text-moss'
              }`}
            >
              {item.num}
            </span>
            <span className="font-medium tracking-wide text-sm">{item.label}</span>
          </Link>
        );
      })}
      <button
        onClick={() => {
          onResumeClick();
          onNavigate?.();
        }}
        className="group flex items-baseline gap-3 py-2 border-b border-line/60 text-bone hover:text-paper transition-colors text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-ink-2"
      >
        <span className="font-mono text-xs text-moss/90 group-hover:text-moss transition-colors">
          06
        </span>
        <span className="font-medium tracking-wide text-sm">View Resume</span>
      </button>
    </nav>
  );
}

function SocialLinks() {
  const links = [
    { href: site.github, label: 'GitHub', Icon: Github, external: true },
    { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
    { href: `mailto:${site.email}`, label: 'Email', Icon: Mail, external: false },
    { href: `tel:${site.phone}`, label: 'Phone', Icon: Phone, external: false },
  ];

  return (
    <div className="flex items-center space-x-5">
      {links.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-bone/80 hover:text-moss transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moss rounded-sm"
          aria-label={label}
        >
          <Icon size={20} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function ResumeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${site.name} resume`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4"
    >
      <div className="bg-ink-2 shadow-2xl w-full h-full sm:w-11/12 sm:h-5/6 flex flex-col border border-line">
        <div className="flex justify-between items-center gap-4 p-4 border-b border-line">
          <h2 className="font-mono text-xs uppercase tracking-wide text-paper">
            {site.name} — Resume
          </h2>
          <div className="flex items-center gap-3">
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 border border-moss text-moss hover:bg-moss hover:text-ink px-4 py-2 transition-colors font-mono text-xs uppercase tracking-wide"
            >
              <Download size={14} aria-hidden="true" />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="text-bone/80 hover:text-paper transition-colors"
              aria-label="Close resume viewer"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile browsers will not render a PDF in an iframe, so give them a real link instead. */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center sm:hidden">
          <p className="text-bone/80 text-sm leading-relaxed max-w-xs">
            Mobile browsers can&apos;t preview PDFs inline. Open the resume in a new tab or download
            it below.
          </p>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-paper text-ink px-5 py-3 font-mono text-xs uppercase tracking-wide"
          >
            <ExternalLink size={14} aria-hidden="true" />
            <span>Open resume</span>
          </a>
        </div>

        <div className="hidden sm:block flex-1 p-2 bg-ink">
          <iframe src={site.resume} title={`${site.name} resume`} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [showResume, setShowResume] = useState(false);
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
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-paper focus:text-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase"
      >
        Skip to content
      </a>

      <div className="grain" aria-hidden="true" />

      <div className="min-h-screen lg:flex font-sans text-bone max-w-[1800px] mx-auto">
        {/* Mobile / tablet header */}
        <header className="lg:hidden sticky top-0 z-40 bg-ink-2 border-b border-line">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="block">
              <p className="font-mono text-[10px] text-moss tracking-[0.2em] uppercase mb-1">
                Portfolio
              </p>
              <span className="font-serif text-xl font-medium text-paper leading-tight">
                {site.firstName} <span className="italic">{site.lastName}</span>
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="text-bone hover:text-moss transition-colors p-2 -mr-2"
            >
              {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden border-t border-line"
              >
                <div className="px-6 py-6">
                  <NavList
                    pathname={pathname}
                    activeSection={activeSection}
                    onNavigate={() => setMenuOpen(false)}
                    onResumeClick={() => setShowResume(true)}
                  />
                  <div className="mt-8">
                    <SocialLinks />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block lg:w-1/4 lg:h-screen lg:sticky lg:top-0 bg-ink-2 p-8 lg:p-12 lg:border-r lg:border-line">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="font-mono text-xs text-moss tracking-[0.2em] uppercase mb-4">
                Portfolio
              </p>
              <Link href="/" className="block">
                <span className="font-serif text-3xl lg:text-4xl font-medium text-paper leading-tight">
                  {site.firstName} <span className="italic">{site.lastName}</span>
                </span>
              </Link>
              <p className="font-mono text-xs text-moss tracking-wide uppercase mt-3 mb-6">
                {site.role} — {site.headline}
              </p>
              <p className="text-bone/80 mb-10 leading-relaxed text-sm">{site.bio}</p>

              <NavList
                pathname={pathname}
                activeSection={activeSection}
                onResumeClick={() => setShowResume(true)}
              />
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>
        </aside>

        <main id="main-content" className="lg:w-3/4 p-6 sm:p-8 lg:p-12 overflow-y-auto bg-ink">
          {children}
        </main>

        {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
      </div>
    </>
  );
}
