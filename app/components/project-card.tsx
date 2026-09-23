import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import type { Project } from '../project/project-data';

export default function ProjectCard({ project }: { project: Project }) {
  const isPrivate = project.link === '#';

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-lg">
      <div className="relative aspect-[3/2] overflow-hidden border-b border-line bg-surface">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.title} website`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-muted">
            <Lock size={22} aria-hidden="true" />
            <span className="text-sm font-medium">Private / NDA project</span>
          </div>
        )}
        {project.client && (
          <span className="absolute left-3 top-3 rounded-md bg-ink px-2 py-1 text-xs font-medium text-white">
            {project.client}
          </span>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="font-serif text-2xl font-medium text-heading">{project.title}</h3>
        <p className="mt-1 text-sm font-semibold text-royal">{project.position}</p>
        <p className="text-sm text-muted">{project.duration}</p>

        <p className="mb-5 mt-4 flex-grow leading-relaxed text-body">{project.description}</p>

        <p className="mb-6 text-sm text-muted">{project.tech.join(' · ')}</p>

        <div className="mt-auto flex flex-wrap gap-3">
          <Link
            href={`/project/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-md bg-royal px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-royal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2"
          >
            Case study
            <ArrowRight size={16} aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </Link>

          {!isPrivate && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2"
            >
              Live site
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">: {project.title} (opens in new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
