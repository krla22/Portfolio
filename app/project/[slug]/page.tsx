import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft } from 'lucide-react';
import { allProjects, getProjectBySlug } from '../project-data';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: `${project.title} — ${project.position}`,
    description: project.description,
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-semibold uppercase tracking-wider text-royal">{children}</h2>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const index = allProjects.findIndex((p) => p.slug === project.slug);
  const prev = index > 0 ? allProjects[index - 1] : undefined;
  const next = index < allProjects.length - 1 ? allProjects[index + 1] : undefined;
  const isPrivate = project.link === '#';

  return (
    <article>
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm font-semibold text-royal hover:text-royal-dark hover:underline"
      >
        <ChevronLeft size={16} aria-hidden="true" />
        All projects
      </Link>

      <header className="mt-6">
        <h1 className="font-serif text-4xl font-medium text-heading lg:text-5xl">{project.title}</h1>
        <p className="mt-3 text-lg font-semibold text-royal">{project.position}</p>
        <p className="text-muted">{project.duration}</p>

        {!isPrivate && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-royal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal-dark"
          >
            View live site
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </header>

      {project.image && (
        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-xl border border-line bg-surface">
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.title} website`}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="mt-12 space-y-12">
        <section>
          <Label>About this project</Label>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-body">{project.summary}</p>
        </section>

        <section>
          <Label>Key wins</Label>
          <ul className="mt-4 space-y-4">
            {project.wins.map((win, i) => (
              <li key={i} className="flex items-start gap-3">
                <win.icon aria-hidden="true" className="mt-1 h-5 w-5 flex-shrink-0 text-royal" />
                <span className="text-lg leading-snug text-heading">{win.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Label>Tech stack</Label>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-body"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {project.lighthouseImage && (
          <section>
            <Label>Performance report</Label>
            <div className="relative mt-4 aspect-[2/1] overflow-hidden rounded-xl border border-line bg-white">
              <Image
                src={project.lighthouseImage}
                alt={`Lighthouse desktop report for ${project.title}`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
              />
            </div>
          </section>
        )}

        {isPrivate && (
          <p className="rounded-xl bg-royal-tint p-5 text-royal-dark">
            This project is private — happy to walk through it on a call.
          </p>
        )}
      </div>

      <nav
        aria-label="More projects"
        className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/project/${prev.slug}`}
            className="group rounded-xl border border-line p-5 transition-colors hover:border-royal"
          >
            <span className="flex items-center gap-1 text-sm text-muted">
              <ArrowLeft size={14} aria-hidden="true" /> Previous
            </span>
            <span className="mt-1 block font-serif text-xl text-heading group-hover:text-royal">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/project/${next.slug}`}
            className="group rounded-xl border border-line p-5 text-right transition-colors hover:border-royal"
          >
            <span className="flex items-center justify-end gap-1 text-sm text-muted">
              Next <ArrowRight size={14} aria-hidden="true" />
            </span>
            <span className="mt-1 block font-serif text-xl text-heading group-hover:text-royal">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
