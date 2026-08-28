"use client";
import { useState } from 'react';
import { Inter, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Mail, Phone, Github, Linkedin, X, Download } from 'lucide-react';

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
  { num: '01', label: 'Lead Gen', href: '/#lead-gen-projects' },
  { num: '02', label: 'E-Commerce', href: '/#ecommerce-projects' },
  { num: '03', label: 'Other Work', href: '/#other-projects' },
  { num: '04', label: 'Skills', href: '/#skills' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showResume, setShowResume] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Kurt Robin Antonio - Portfolio</title>
        <meta name="description" content="Full Stack Developer & Technical SEO Strategist" />
      </head>

      <body className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} font-sans bg-ink text-bone`}>
        <div className="grain" aria-hidden="true" />

        <div className="min-h-screen md:flex font-sans text-bone max-w-[1800px] mx-auto">

          <aside className="md:w-1/3 lg:w-1/4 md:h-screen md:sticky md:top-0 bg-ink-2 p-8 lg:p-12 md:border-r md:border-line">
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
                  I build the full stack behind high-performing websites with custom WordPress plugins,
                  deep ACF Pro architecture, technical SEO, and custom AI automation pipelines that turn
                  web traffic into leads and sales. My work spans lead-gen platforms for US clients and
                  e-commerce builds for AU clients with both surfacing directly in AI search results.
                </p>

                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-baseline gap-3 py-2 border-b border-line/60 text-bone hover:text-paper transition-colors"
                    >
                      <span className="font-mono text-xs text-moss/80 group-hover:text-moss transition-colors">
                        {item.num}
                      </span>
                      <span className="font-medium tracking-wide text-sm">
                        {item.label}
                      </span>
                    </a>
                  ))}
                  <button
                    onClick={() => setShowResume(true)}
                    className="group flex items-baseline gap-3 py-2 border-b border-line/60 text-bone hover:text-paper transition-colors text-left"
                  >
                    <span className="font-mono text-xs text-moss/80 group-hover:text-moss transition-colors">
                      04
                    </span>
                    <span className="font-medium tracking-wide text-sm">
                      View Resume
                    </span>
                  </button>
                </nav>
              </div>

              <div>
                <div className="flex items-center space-x-5 mt-10">
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
              </div>
            </div>
          </aside>

          <main className="md:w-2/3 lg:w-3/4 p-8 lg:p-12 overflow-y-auto bg-ink">
            {children}
          </main>

          {showResume && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm">
              <div className="bg-ink-2 shadow-2xl w-11/12 h-5/6 flex flex-col border border-line">
                <div className="flex justify-between items-center p-4 border-b border-line">
                  <h3 className="font-mono text-xs uppercase tracking-wide text-paper">Kurt Robin Antonio — Resume</h3>
                  <div className="flex items-center space-x-4">
                    <a
                      href="/AntonioKurtRobin_Resume.pdf"
                      download="AntonioKurtRobin_Resume.pdf"
                      className="inline-flex items-center space-x-2 border border-moss text-moss hover:bg-moss hover:text-ink px-4 py-2 transition-colors font-mono text-xs uppercase tracking-wide"
                    >
                      <Download size={14} />
                      <span>Download</span>
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
