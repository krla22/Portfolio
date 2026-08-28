"use client";
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { leadGenProjects, ecommerceProjects, archivedProjects, Project } from '../project-data';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';

export default function ProjectDetailPage() {
  const [project, setProject] = useState<Project | null>(null);
  const params = useParams();

  useEffect(() => {
    if (params.slug) {
      const allProjects = [...leadGenProjects, ...ecommerceProjects, ...archivedProjects];
      const foundProject = allProjects.find(p => p.slug === params.slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        notFound();
      }
    }
  }, [params.slug]);

  if (!project) {
    return <div className="text-paper font-mono text-xs uppercase tracking-wide">Loading...</div>;
  }

  const fallbackImage = 'https://placehold.co/1200x600/12140F/A6A395?text=Image+Not+Available';

  return (
    <div className="text-paper">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-moss hover:text-moss-bright transition-colors group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to all projects</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">

        <div className="flex-1 overflow-y-auto">
          <ProjectDetailContent project={project} />

          {project.lighthouseImage && (
            <div className="mt-14">
              <h4 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">Performance Report</h4>
              <div className="mt-4 relative bg-ink-2 border border-line overflow-hidden">
                <img
                  src={project.lighthouseImage}
                  alt={`${project.title} Lighthouse Report`}
                  className="w-full h-auto"
                  onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                />
              </div>
            </div>
          )}

          <div className="py-8 mt-10 border-t border-line">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full md:w-auto space-x-2 bg-paper text-ink hover:bg-moss px-6 py-3 transition-colors font-mono text-xs uppercase tracking-wide ${project.link === '#' ? 'opacity-40 cursor-not-allowed hover:bg-paper' : ''}`}
              onClick={(e) => project.link === '#' && e.preventDefault()}
            >
              <span>{project.link === '#' ? 'Link (Private)' : 'View Live Site'}</span>
              {project.link !== '#' && <ArrowUpRight size={16} />}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div className="space-y-10">
      <h1 className="font-serif text-4xl lg:text-5xl font-medium text-paper">{project.title}</h1>
      <div>
        <h4 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">Role &amp; Duration</h4>
        <p className="text-lg text-paper mt-2">{project.position}</p>
        <p className="text-sm text-bone/60 font-mono">{project.duration}</p>
      </div>

      <div>
        <h4 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">About This Project</h4>
        <p className="text-bone/80 mt-3 leading-relaxed max-w-3xl">{project.summary}</p>
      </div>

      <div>
        <h4 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">Key Wins</h4>
        <ul className="space-y-4 mt-4">
          {project.wins.map((win, index) => (
            <li key={index} className="flex items-start space-x-3">
              <win.icon className="flex-shrink-0 w-5 h-5 text-moss mt-1" />
              <span className="text-paper text-lg leading-snug">{win.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">Tech Stack &amp; Tools</h4>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech: string, index: number) => (
            <span
              key={index}
              className="font-mono text-xs uppercase tracking-wide text-bone border border-line px-3 py-2 hover:border-moss hover:text-moss transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
