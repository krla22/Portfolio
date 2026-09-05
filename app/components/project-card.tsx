import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Eye, Lock } from 'lucide-react';
import type { Project } from '../project/project-data';

export default function ProjectCard({ project }: { project: Project }) {
  const isPrivate = project.link === '#';

  return (
    <article className="group border border-line bg-ink-2 flex flex-col transition-colors hover:border-moss/60">
      <div className="relative h-64 overflow-hidden border-b border-line bg-ink-3">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.title} website`}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-bone/60">
            <Lock size={22} aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
              Private project
            </span>
          </div>
        )}
        {project.client && (
          <span className="absolute top-3 left-3 bg-ink/90 text-moss font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-moss/40">
            {project.client}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-medium text-paper">{project.title}</h3>

        <p className="font-mono text-xs text-moss uppercase tracking-wide mt-2">
          {project.position}
        </p>
        <p className="font-mono text-[11px] text-bone/70 uppercase tracking-wide mt-1 mb-3">
          {project.duration}
        </p>

        <p className="text-bone/80 mb-6 leading-relaxed flex-grow text-sm">{project.description}</p>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 mb-6 font-mono text-[11px] text-bone/70 uppercase tracking-wide">
          {project.tech.map((tech) => (
            <li key={tech} className="after:content-['/'] after:ml-3 last:after:content-none">
              {tech}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={`/project/${project.slug}`}
            className="inline-flex items-center justify-center gap-2 border border-line hover:border-moss text-bone hover:text-moss px-5 py-3 transition-colors font-mono text-xs uppercase tracking-wide"
          >
            <Eye size={16} aria-hidden="true" />
            <span>Case study</span>
          </Link>

          {isPrivate ? (
            <span
              aria-disabled="true"
              className="inline-flex items-center justify-center gap-2 border border-line text-bone/60 px-5 py-3 font-mono text-xs uppercase tracking-wide cursor-not-allowed"
            >
              Link private
            </span>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-paper text-ink hover:bg-moss px-5 py-3 transition-colors font-mono text-xs uppercase tracking-wide"
            >
              <span>View site</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
