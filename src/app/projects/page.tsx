import { ProjectList } from '@/components/ProjectList';
import { projects } from './data';
import { ProjectTag } from './tag';
import '@/style/project.css';

export default function Project() {
  return (
    <div className="project">
      <div className="project__wrapper">
        <div>
          <ProjectTag />
        </div>
        <div className="project__content">
          <div className="project__List">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Ayo Projects',
  description: 'List of projects',
};
