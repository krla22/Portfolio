"use client";
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, archivedProjects, Project } from '../project-data';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';

export default function ProjectDetailPage() {
  const [project, setProject] = useState<Project | null>(null);
  const params = useParams();
  
  useEffect(() => {
    if (params.slug) {
      const allProjects = [...projects, ...archivedProjects];
      const foundProject = allProjects.find(p => p.slug === params.slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        notFound();
      }
    }
  }, [params.slug]);

  if (!project) {
    return <div className="text-white">Loading...</div>;
  }
  
  const fallbackImage = 'https://placehold.co/1200x600/1e293b/94a3b8?text=Image+Not+Available';

  return (
    <div className="text-white">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to all projects</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <div className="flex-1 overflow-y-auto">
          <ProjectDetailContent project={project} />

          {project.lighthouseImage && (
            <div className="mt-12">
              <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Performance Report</h4>
              <div className="mt-4 relative bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
                <img 
                  src={project.lighthouseImage}
                  alt={`${project.title} Lighthouse Report`}
                  className="w-full h-auto"
                  onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                />
              </div>
            </div>
          )}

          <div className="py-8 mt-8 border-t border-gray-700">
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full md:w-auto space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors font-medium ${project.link === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={(e) => project.link === '#' && e.preventDefault()}
            >
              <span>{project.link === '#' ? 'Link (Private)' : 'View Live Site'}</span>
              {project.link !== '#' && <ArrowUpRight size={18} />}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl lg:text-5xl font-bold text-white">{project.title}</h1>
      <div>
        <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Role & Duration</h4>
        <p className="text-lg text-white mt-1">{project.position}</p>
        <p className="text-md text-gray-400">{project.duration}</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">About This Project</h4>
        <p className="text-white mt-2 leading-relaxed max-w-3xl">{project.summary}</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Key Wins</h4>
        <ul className="space-y-3 mt-3">
          {project.wins.map((win, index) => (
            <li key={index} className="flex items-start space-x-3">
              <win.icon className="flex-shrink-0 w-5 h-5 text-emerald-400 mt-1" />
              <span className="text-white text-lg">{win.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Tech Stack & Tools</h4>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((tech: string, index: number) => (
            <span 
              key={index} 
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}