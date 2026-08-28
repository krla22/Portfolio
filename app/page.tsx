"use client";
import Link from 'next/link';
import { projects, archivedProjects, skills, Project } from './project/project-data';
import { ArrowUpRight, Eye } from 'lucide-react';

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

export default function PortfolioPage() {
  return (
    <>
      <section id="projects">
        <SectionHeading index="01" title="Featured Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="other-projects" className="mt-20 pt-16 border-t border-line">
        <SectionHeading index="02" title="Other Noteworthy Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {archivedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mt-20 pt-16 border-t border-line">
        <SectionHeading index="03" title="Core Technical Skills" />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="font-mono text-xs uppercase tracking-wide text-bone border border-line px-3 py-2 hover:border-moss hover:text-moss transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-20 pt-10 border-t border-line">
        <p className="text-center font-mono text-xs text-bone/40 tracking-wide">
          &copy; {new Date().getFullYear()} Kurt Robin Antonio — Built with Next.js
        </p>
      </footer>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const fallbackImage = 'https://placehold.co/600x400/12140F/A6A395?text=Image+Not+Available';

  return (
    <div className="group border border-line bg-ink-2 flex flex-col transition-colors hover:border-moss/60">
      <div className="relative overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
          onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
        />
        {project.client && (
          <span className="absolute top-3 left-3 bg-ink/90 text-moss font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-moss/40">
            {project.client}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-medium text-paper">{project.title}</h3>

        <p className="font-mono text-xs text-moss uppercase tracking-wide mt-2 mb-3">{project.position}</p>

        <p className="text-bone/70 mb-6 leading-relaxed flex-grow text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6 font-mono text-[11px] text-bone/50 uppercase tracking-wide">
          {project.tech.map((tech: string, index: number) => (
            <span key={index} className="after:content-['/'] after:ml-3 last:after:content-none">
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={`/project/${project.slug}`}
            className="inline-flex items-center justify-center space-x-2 border border-line hover:border-moss text-bone hover:text-moss px-5 py-3 transition-colors font-mono text-xs uppercase tracking-wide"
          >
            <Eye size={16} />
            <span>Learn More</span>
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center space-x-2 bg-paper text-ink hover:bg-moss px-5 py-3 transition-colors font-mono text-xs uppercase tracking-wide ${project.link === '#' ? 'opacity-40 cursor-not-allowed hover:bg-paper' : ''}`}
            onClick={(e) => project.link === '#' && e.preventDefault()}
          >
            <span>{project.link === '#' ? 'Link (Private)' : 'View Site'}</span>
            {project.link !== '#' && <ArrowUpRight size={16} />}
          </a>
        </div>
      </div>
    </div>
  );
}
