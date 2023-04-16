'use client';
import React, { useMemo } from 'react';
import { projects } from './data';
import { Header } from '@/components/UI/Header';
import { ChevronRightIcon } from '@/components/UI/icons/ChevronRight';

const ProjectPart: React.FC = () => {
  const [firstProject] = useMemo(() => projects, []);
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
          <div className="showcase-listing">
            <div className="showcase__item">
              <div>
                <img src={firstProject.bannerImgUrl} alt={firstProject.title} />
              </div>
            </div>
          </div>
          <div className="view-projects">
            <button className="view__button flex center sm-3-ebd">
              <div className="view__content flex-inline">
                <p className="view__label">See all projects</p>
                <div className="view__icon flex center">
                  <ChevronRightIcon width={22} height={14} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectPart };
