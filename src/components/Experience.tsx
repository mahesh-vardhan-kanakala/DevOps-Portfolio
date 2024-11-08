import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ role, company, period, description }: {
  role: string;
  company: string;
  period: string;
  description: string[];
}) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-0 mt-1 border-r-2 border-indigo-200 h-full"></div>
    <div className="absolute left-0 top-0 mt-1 w-4 h-4 rounded-full bg-indigo-600"></div>
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-gray-900">{role}</h3>
      <div className="text-indigo-600 font-medium">{company}</div>
      <div className="text-sm text-gray-500">{period}</div>
    </div>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: 'Senior DevOps Engineer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: [
        'Led the implementation of GitOps practices using ArgoCD and Flux',
        'Reduced deployment time by 70% through CI/CD pipeline optimization',
        'Architected and maintained multi-cloud infrastructure serving 1M+ users',
        'Implemented zero-trust security model across all environments',
      ],
    },
    {
      role: 'DevOps Engineer',
      company: 'Cloud Systems Ltd.',
      period: '2019 - 2021',
      description: [
        'Managed Kubernetes clusters across multiple environments',
        'Implemented infrastructure as code using Terraform and AWS CloudFormation',
        'Developed automated backup and disaster recovery solutions',
        'Set up monitoring and alerting using Prometheus and Grafana',
      ],
    },
    {
      role: 'Systems Administrator',
      company: 'Data Corp',
      period: '2018 - 2019',
      description: [
        'Maintained and optimized Linux-based infrastructure',
        'Implemented configuration management using Ansible',
        'Automated routine maintenance tasks using Python and Bash',
        'Managed on-premises to cloud migration projects',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          <p className="mt-4 text-gray-600">Building and scaling infrastructure for modern applications</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;