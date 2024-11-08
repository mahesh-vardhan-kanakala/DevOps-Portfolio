import React from 'react';
import { Cloud, Database, Code, Server, Lock, Terminal } from 'lucide-react';

export const Skills = () => {
  const skills = [
    {
      category: 'CI/CD',
      items: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions'],
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['AWS', 'Docker', 'Kubernetes'],
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      category: 'Infrastructure as Code',
      items: ['Terraform', 'Ansible', 'CloudFormation'],
      icon: <Server className="w-6 h-6" />,
    },
    {
      category: 'Programming',
      items: ['Python', 'Bash', 'JavaScript'],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'Redis'],
      icon: <Database className="w-6 h-6" />,
    },
    {
      category: 'Security',
      items: ['OWASP', 'SSL/TLS', 'IAM'],
      icon: <Lock className="w-6 h-6" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  {skill.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};