"use client";
import Link from 'next/link';
import { projects, archivedProjects, skills, Project } from './project/project-data';
import { ArrowUpRight, Eye } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <>
      <section id="projects">
        <h2 className="text-3xl font-bold text-white mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="other-projects" className="mt-16 pt-12 border-t border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-8">
          Other Noteworthy Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {archivedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mt-16 pt-12 border-t border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-8">
          Core Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-16 pt-12 border-t border-gray-700">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Kurt Robin Antonio. All rights reserved.
        </p>
      </footer>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const fallbackImage = 'https://placehold.co/600x400/1e293b/94a3b8?text=Image+Not+Available';
  
  const getBadgeColor = (client: string) => {
    switch (client) {
      case 'NuroSparX Client':
        return 'bg-amber-300 text-amber-800';
      case 'NuVision Sister Company':
        return 'bg-sky-300 text-sky-800';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden transition-all hover:border-emerald-600/50 hover:shadow-lg flex flex-col">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover" 
          onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
        />
        {project.client && (
          <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full shadow-md ${getBadgeColor(project.client)}`}>
            {project.client}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        
        <p className="text-sm font-medium text-emerald-400 mt-1 mb-3">{project.position}</p>
        
        <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string, index: number) => (
            <span 
              key={index} 
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={`/project/${project.slug}`}
            className="inline-flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-5 py-3 rounded-md transition-colors font-medium"
          >
            <Eye size={18} />
            <span>Learn More</span>
          </Link>
          <a 
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md transition-colors font-medium ${project.link === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={(e) => project.link === '#' && e.preventDefault()}
          >
            <span>{project.link === '#' ? 'Link (Private)' : 'View Site'}</span>
            {project.link !== '#' && <ArrowUpRight size={18} />}
          </a>
        </div>
      </div>
    </div>
  );
}