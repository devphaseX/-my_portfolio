'use client';

import { Header } from '@/components/UI/Header';
import { ChevronLeftIcon } from '@/components/UI/icons/ChevronLeft';
import { useRouter } from 'next/navigation';

const ProjectTag: React.FC = () => {
  const router = useRouter();
  return (
    <div className="project-tag flex">
      <div className="flex-inline project-info">
        <div
          className="project-return flex center"
          onClick={() => router.push('/')}
        >
          <ChevronLeftIcon />
        </div>
        <div className="project-label">
          <Header text="Projects" className="lg-2-md" />
        </div>
      </div>
    </div>
  );
};

export { ProjectTag };
