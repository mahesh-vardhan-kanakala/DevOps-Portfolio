import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'DevSecOps Pipeline',
      description: 'Implemented a secure CI/CD pipeline with automated security scanning and deployment.',
      technologies: ['Jenkins', 'Docker', 'SonarQube', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'AI Image Generator',
      description: 'Built a scalable infrastructure for AI-powered image generation service.',
      technologies: ['Kubernetes', 'Python', 'TensorFlow', 'Azure'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Student Management Portal',
      description: 'Developed and deployed a containerized student management system.',
      technologies: ['Docker', 'Node.js', 'MongoDB', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};