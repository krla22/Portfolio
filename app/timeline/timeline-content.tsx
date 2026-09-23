import { GraduationCap } from 'lucide-react';
import { timelineData, education, TimelineEntry, TimelineProject } from './timeline-data';

// Newest role first; recruiters read top-down and care most about current work.
const entries = [...timelineData].reverse();

function StatusBadge({ label, strong }: { label: string; strong?: boolean }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        strong ? 'bg-royal text-white' : 'bg-royal-tint text-royal-dark'
      }`}
    >
      {label}
    </span>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((highlight, i) => (
        <li key={i} className="flex items-start gap-3 leading-relaxed text-body">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-royal" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TimelineContent() {
  return (
    <section>
      <h1 className="font-serif text-4xl font-medium text-heading lg:text-5xl">Experience</h1>
      <p className="mt-3 max-w-2xl text-lg text-body">
        Here&apos;s where I&apos;ve worked, newest first. It starts with my first Laravel job and goes
        all the way to the e-commerce rebuilds I&apos;m leading now.
      </p>

      <ol className="relative ml-2 mt-12 border-l-2 border-line">
        {entries.map((entry) => (
          <TimelineItem key={entry.company} entry={entry} />
        ))}
      </ol>

      <div className="mt-10 flex items-start gap-3 rounded-xl bg-surface p-5">
        <GraduationCap size={20} aria-hidden="true" className="mt-0.5 flex-shrink-0 text-royal" />
        <p className="text-body">
          <span className="font-semibold text-heading">{education.degree}</span>, {education.school}{' '}
          <span className="text-muted">({education.duration})</span>
        </p>
      </div>
    </section>
  );
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="mb-12 ml-8 last:mb-0">
      <span
        aria-hidden="true"
        className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white ${
          entry.current ? 'bg-royal' : 'bg-line'
        }`}
      />

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-muted">{entry.duration}</span>
        {entry.current && <StatusBadge label="Current" strong />}
      </div>

      <h2 className="mt-1 font-serif text-2xl font-medium text-heading">{entry.company}</h2>
      {entry.subtitle && <p className="text-sm italic text-muted">{entry.subtitle}</p>}
      <p className="mt-1 font-semibold text-royal">{entry.role}</p>

      <p className="mb-4 mt-3 leading-relaxed text-body">{entry.description}</p>

      {entry.highlights.length > 0 && <Highlights items={entry.highlights} />}

      {entry.projects && entry.projects.length > 0 && (
        <ol className="mt-6 space-y-6">
          {[...entry.projects].reverse().map((project) => (
            <ProjectSubItem key={project.name} project={project} />
          ))}
        </ol>
      )}
    </li>
  );
}

function ProjectSubItem({ project }: { project: TimelineProject }) {
  return (
    <li className="rounded-xl border border-line p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-muted">{project.duration}</span>
        {project.current && <StatusBadge label="Current" strong />}
        {!project.current && project.maintaining && <StatusBadge label="Live, still maintaining" />}
      </div>

      <h3 className="mt-1 font-serif text-xl font-medium text-heading">{project.name}</h3>
      <p className="mt-2 leading-relaxed text-body">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-3">
          <Highlights items={project.highlights} />
        </div>
      )}
    </li>
  );
}
