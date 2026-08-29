"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, GraduationCap } from 'lucide-react';
import { timelineData, education, TimelineEntry, TimelineProject } from './timeline-data';

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="font-mono text-xs text-moss tracking-[0.2em]">{index}</span>
      <h2 className="font-serif text-2xl lg:text-3xl font-medium text-paper">
        {title}
      </h2>
      <span className="flex-1 h-px bg-line ml-2" />
    </div>
  );
}

export default function TimelinePage() {
  return (
    <>
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-moss hover:text-moss-bright transition-colors group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to home</span>
        </Link>
      </div>

      <section id="work-timeline">
        <SectionHeading index="05" title="Work Timeline" />
        <p className="text-bone/70 mb-14 leading-relaxed text-sm max-w-2xl">
          A chronological look at my career, from my first developer role to the work I&apos;m
          doing today.
        </p>

        <ol className="relative border-l border-line ml-3">
          {timelineData.map((entry, index) => (
            <TimelineItem key={entry.company} entry={entry} index={index} />
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mt-4 ml-3 pl-10 flex items-start gap-3 text-bone/50"
        >
          <GraduationCap size={16} className="mt-0.5 flex-shrink-0 text-bone/40" />
          <p className="text-xs leading-relaxed">
            <span className="text-bone/60">{education.degree}</span> — {education.school}
            <span className="font-mono uppercase tracking-wide"> ({education.duration})</span>
          </p>
        </motion.div>
      </section>

      <footer className="mt-20 pt-10 border-t border-line">
        <p className="text-center font-mono text-xs text-bone/40 tracking-wide">
          &copy; {new Date().getFullYear()} Kurt Robin Antonio — Built with Next.js
        </p>
      </footer>
    </>
  );
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: Math.min(index, 4) * 0.05 }}
      className="mb-12 ml-10 last:mb-0"
    >
      <span
        className={`absolute -left-[9px] flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 bg-ink ${
          entry.current ? 'border-moss' : 'border-line'
        }`}
      >
        {entry.current && (
          <span className="absolute w-2 h-2 rounded-full bg-moss animate-pulse" />
        )}
        {!entry.current && <span className="w-2 h-2 rounded-full bg-bone/30" />}
      </span>

      <div className="group border border-line bg-ink-2 p-6 lg:p-8 transition-colors hover:border-moss/60">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="font-mono text-xs text-moss/90 uppercase tracking-wide font-semibold">
            {entry.duration}
          </span>
          {entry.current && (
            <span className="font-mono text-[10px] uppercase tracking-wide text-moss border border-moss/40 px-2 py-0.5">
              Current
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl lg:text-2xl font-medium text-paper">
          {entry.company}
        </h3>
        {entry.subtitle && (
          <p className="text-bone/50 text-xs mt-1 italic">{entry.subtitle}</p>
        )}
        <p className="font-mono text-xs text-moss uppercase tracking-wide mt-2 mb-4">
          {entry.role}
        </p>

        <p className="text-bone/70 leading-relaxed text-sm mb-5">{entry.description}</p>

        <ul className="space-y-2.5">
          {entry.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-bone/70 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-moss/70 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {entry.projects && entry.projects.length > 0 && (
          <ol className="mt-6 space-y-6 border-l border-line pl-6">
            {entry.projects.map((project) => (
              <ProjectSubItem key={project.name} project={project} />
            ))}
          </ol>
        )}
      </div>
    </motion.li>
  );
}

function ProjectSubItem({ project }: { project: TimelineProject }) {
  return (
    <li className="relative">
      <span
        className={`absolute -left-[29px] top-1 flex items-center justify-center w-[10px] h-[10px] rounded-full border-2 bg-ink-2 ${
          project.current || project.maintaining ? 'border-moss' : 'border-line'
        }`}
      >
        {project.current && <span className="absolute w-1 h-1 rounded-full bg-moss animate-pulse" />}
        {!project.current && project.maintaining && <span className="absolute w-1 h-1 rounded-full bg-moss/60" />}
      </span>

      <div className="flex flex-wrap items-center gap-2 mb-1">
        <span className="font-mono text-[11px] text-moss/80 uppercase tracking-wide">
          {project.duration}
        </span>
        {project.current && (
          <span className="font-mono text-[9px] uppercase tracking-wide text-moss border border-moss/40 px-1.5 py-0.5">
            Current
          </span>
        )}
        {!project.current && project.maintaining && (
          <span className="font-mono text-[9px] uppercase tracking-wide text-moss/70 border border-moss/25 px-1.5 py-0.5">
            Live — Maintaining
          </span>
        )}
      </div>

      <h4 className="font-serif text-base font-medium text-paper">{project.name}</h4>

      <p className="text-bone/60 text-sm leading-relaxed mt-1">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="space-y-2.5 mt-3">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-bone/70 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-moss/70 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
