'use client';
import React, { useMemo } from 'react';
import { showcaseProjects } from '../../../../app/projects/data';
import { Header } from '@/components/UI/Header';
import { ShowcaseProjectCard } from '@/components/UI/projectCard';
import { ArrowButton } from '@/components/UI/button/ArrowButton';

const ProjectPart: React.FC = () => {
  const projects = useMemo(() => showcaseProjects, []);

  return (
    <div className="project-part">
      <div className="project-part-content">
        <div className="flex">
          <Header text="Projects" />
          <span className="flex center project__count sm-4-md">
            {projects.length > 5 ? '5+' : projects.length}
          </span>
        </div>
        <div className="showcase-project">
          {projects.map((project) => (
            <ShowcaseProjectCard key={project.id} {...project} />
          ))}

          <div className="view-projects">
            <button className="view__button flex center sm-3-ebd">
              <div className="view__content flex-inline">
                <p className="view__label">See all projects</p>
                <ArrowButton to="/projects" fill direction={{ rtl: true }} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectPart };
