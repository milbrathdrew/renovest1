import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-gray-600">{project.address}</p>
    </div>
  );
}; 