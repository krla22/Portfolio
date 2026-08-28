"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Inter, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Mail, Phone, Github, Linkedin, X, Menu, Download } from 'lucide-react';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: '--font-fraunces',
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: '--font-geist-mono',
});

const navItems = [
  { num: '01', label: 'E-Commerce', href: '/#ecommerce-projects' },
  { num: '02', label: 'Lead Gen', href: '/#lead-gen-projects' },
  { num: '03', label: 'Other Work', href: '/#other-projects' },
  { num: '04', label: 'Skills', href: '/#skills' },
  { num: '05', label: 'Work Timeline', href: '/timeline' },
];

const bioText = "I build the full stack behind high-performing websites with custom WordPress plugins, deep ACF Pro architecture, technical SEO, and custom AI automation pipelines that turn web traffic into leads and sales. My work spans lead-gen platforms for US clients and e-commerce builds for AU clients with both surfacing directly in AI search results.";

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
    <nav className="flex flex-col space-y-1">
      {navItems.map((item) => {
        const active = isNavItemActive(item, pathname, activeSection);
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className={`group flex items-baseline gap-3 py-2 border-b transition-colors ${
              active ? 'border-moss text-paper' : 'border-line/60 text-bone hover:text-paper'
            }`}
          >
            <span
              className={`font-mono text-xs transition-colors ${
                active ? 'text-moss' : 'text-moss/80 group-hover:text-moss'
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
        className="group flex items-baseline gap-3 py-2 border-b border-line/60 text-bone hover:text-paper transition-colors text-left"
      >
        <span className="font-mono text-xs text-moss/80 group-hover:text-moss transition-colors">
          06
        </span>
        <span className="font-medium tracking-wide text-sm">
          View Resume
        </span>
      </button>
    </nav>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center space-x-5">
      <a
        href="https://github.com/krla22"
        target="_blank"
        rel="noopener noreferrer"
        className="text-bone/60 hover:text-moss transition-colors"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/kurtrobinantonio/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-bone/60 hover:text-moss transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="mailto:antoniokurtrobin.work@gmail.com"
        className="text-bone/60 hover:text-moss transition-colors"
        aria-label="Email"
      >
        <Mail size={20} />
      </a>
      <a
        href="tel:+639994238370"
        className="text-bone/60 hover:text-moss transition-colors"
        aria-label="Phone"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en">
      <head>
        <title>Kurt Robin Antonio - Portfolio</title>
        <meta name="description" content="Full Stack Developer & Technical SEO Strategist" />
      </head>

      <body className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} font-sans bg-ink text-bone`}>
        <div className="grain" aria-hidden="true" />

        <div className="min-h-screen lg:flex font-sans text-bone max-w-[1800px] mx-auto">

          {/* Mobile / tablet header */}
          <header className="lg:hidden sticky top-0 z-40 bg-ink-2 border-b border-line">
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" className="block">
                <p className="font-mono text-[10px] text-moss tracking-[0.2em] uppercase mb-1">
                  Portfolio / 2026
                </p>
                <h1 className="font-serif text-xl font-medium text-paper leading-tight">
                  Kurt Robin <span className="italic">Antonio</span>
                </h1>
              </Link>
              <button
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="text-bone hover:text-moss transition-colors p-2 -mr-2"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
                    <p className="text-bone/70 mb-6 leading-relaxed text-sm">{bioText}</p>
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
                  Portfolio / 2026
                </p>
                <h1 className="font-serif text-3xl lg:text-4xl font-medium text-paper leading-tight">
                  Kurt Robin <span className="italic">Antonio</span>
                </h1>
                <h2 className="font-mono text-xs text-moss tracking-wide uppercase mt-3 mb-6">
                  Full Stack Developer &amp; Technical SEO Strategist
                </h2>
                <p className="text-bone/70 mb-10 leading-relaxed text-sm">
                  {bioText}
                </p>

                <NavList
                  pathname={pathname}
                  activeSection={activeSection}
                  onResumeClick={() => setShowResume(true)}
                />
              </div>

              <div>
                <div className="mt-10">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:w-3/4 p-6 sm:p-8 lg:p-12 overflow-y-auto bg-ink">
            {children}
          </main>

          {showResume && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4">
              <div className="bg-ink-2 shadow-2xl w-full h-full sm:w-11/12 sm:h-5/6 flex flex-col border border-line">
                <div className="flex justify-between items-center p-4 border-b border-line">
                  <h3 className="font-mono text-xs uppercase tracking-wide text-paper">Kurt Robin Antonio — Resume</h3>
                  <div className="flex items-center space-x-4">
                    <a
                      href="/AntonioKurtRobin_Resume.pdf"
                      download="AntonioKurtRobin_Resume.pdf"
                      className="inline-flex items-center space-x-2 border border-moss text-moss hover:bg-moss hover:text-ink px-4 py-2 transition-colors font-mono text-xs uppercase tracking-wide"
                    >
                      <Download size={14} />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                    <button
                      onClick={() => setShowResume(false)}
                      className="text-bone/60 hover:text-paper transition-colors"
                      aria-label="Close resume viewer"
                    >
                      <X size={22} />
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-2 bg-ink">
                  <iframe
                    src="/AntonioKurtRobin_Resume.pdf"
                    title="Kurt Robin Antonio - Resume"
                    className="w-full h-full"
                  >
                    <p className="text-paper text-center p-8">
                      Your browser does not support embedded PDFs. Please use the
                      <a href="/AntonioKurtRobin_Resume.pdf" download="AntonioKurtRobin_Resume.pdf" className="text-moss hover:underline">
                        Download
                      </a>
                      button to view the file.
                    </p>
                  </iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
