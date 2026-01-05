"use client";
import { useState } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import { Mail, Phone, Github, Linkedin, X, Download } from 'lucide-react';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

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
        <meta name="description" content="Senior Full Stack Developer & Technical SEO Lead" />
      </head>
      
      <body className={`${inter.variable} font-sans bg-gray-900`}>
        
        <div className="min-h-screen md:flex font-inter text-gray-300 max-w-[1800px] mx-auto shadow-2xl shadow-black/20">
          
          <aside className="md:w-1/3 lg:w-1/4 md:h-screen md:sticky md:top-0 bg-gray-800 p-8 lg:p-12 md:border-r md:border-gray-700">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white">
                  Kurt Robin Antonio
                </h1>
                <h2 className="text-lg font-medium text-emerald-400 mt-2 mb-6">
                  Senior Full Stack Developer & Technical SEO Lead
                </h2>
                <p className="text-gray-400 mb-10 leading-relaxed">
                  Proven success delivering high-performance, scalable websites for US clients. 
                  I build sites that drive traffic and conversions through SEO, automation, and optimized architecture.
                </p>
                
                <nav className="flex flex-col space-y-4">
                  <a href="/#projects" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors group">
                    <span className="inline-block w-8 h-px bg-gray-500 group-hover:bg-emerald-400 transition-colors mr-3"></span>
                    Projects
                  </a>
                  <a href="/#other-projects" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors group">
                    <span className="inline-block w-8 h-px bg-gray-500 group-hover:bg-emerald-400 transition-colors mr-3"></span>
                    Other Projects
                  </a>
                  <a href="#skills" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors group">
                    <span className="inline-block w-8 h-px bg-gray-500 group-hover:bg-emerald-400 transition-colors mr-3"></span>
                    Skills
                  </a>
                  <button 
                    onClick={() => setShowResume(true)}
                    className="text-left text-gray-300 hover:text-emerald-400 font-medium transition-colors group"
                  >
                    <span className="inline-block w-8 h-px bg-gray-500 group-hover:bg-emerald-400 transition-colors mr-3"></span>
                    View Resume
                  </button>
                </nav>
              </div>

              <div>
                <div className="flex items-center space-x-5 mt-10">
                  <a 
                    href="https://github.com/krla22"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kurtrobinantonio/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:antoniokurtrobin.work@gmail.com"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                  <a 
                    href="tel:+639994238370"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    aria-label="Phone"
                  >
                    <Phone size={24} />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <main className="md:w-2/3 lg:w-3/4 p-8 lg:p-12 overflow-y-auto bg-gray-900">
            {children}
          </main>

          {showResume && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="bg-gray-800 rounded-lg shadow-2xl w-11/12 h-5/6 flex flex-col border border-gray-700">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                  <h3 className="text-lg font-bold text-white">Kurt Robin Antonio - Resume</h3>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="/AntonioKurtRobin_Resume.pdf"
                      download="AntonioKurtRobin_Resume.pdf"
                      className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors font-medium text-sm"
                    >
                      <Download size={16} />
                      <span>Download</span>
                    </a>
                    <button 
                      onClick={() => setShowResume(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Close resume viewer"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-2 bg-gray-900">
                  <iframe 
                    src="/AntonioKurtRobin_Resume.pdf" 
                    title="Kurt Robin Antonio - Resume"
                    className="w-full h-full"
                  >
                    <p className="text-white text-center p-8">
                      Your browser does not support embedded PDFs. Please use the
                      <a href="/AntonioKurtRobin_Resume.pdf" download="AntonioKurtRobin_Resume.pdf" className="text-emerald-400 hover:underline">
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