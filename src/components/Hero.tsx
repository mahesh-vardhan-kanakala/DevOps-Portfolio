import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="about" className="pt-20 pb-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DevOps Engineer
          </h1>
          <p className="text-xl text-indigo-600 mb-6">
            Enabling Continuous Integration and Continuous Delivery
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Passionate about automating workflows and optimizing deployment processes. 
            Specialized in CI/CD pipelines, containerization, and cloud technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};