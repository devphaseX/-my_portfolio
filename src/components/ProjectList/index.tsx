'use client';
import { useMemo } from 'react';
import { ProjectData } from '../../app/projects/data';
import { ProjectCard } from '../UI/projectCard';

interface ProjectListProps {
  projects: Array<ProjectData>;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects: _projects }) => {
  const projects = useMemo(() => _projects, [_projects]);

  return (
    <div className="project-list flex">
      {projects.map((project, index) => (
        <ProjectCard index={index + 1} {...project} key={project.id} />
      ))}
    </div>
  );
};

export { ProjectList };
