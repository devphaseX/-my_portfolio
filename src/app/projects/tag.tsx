'use client';
import { Header } from '@/components/UI/Header';
import { ArrowButton } from '@/components/UI/button/ArrowButton';
import { ChevronLeftIcon } from '@/components/UI/icons/ChevronLeft';
import { useRouter } from 'next/navigation';

const ProjectTag: React.FC = () => {
  const router = useRouter();
  return (
    <div className="project-tag flex">
      <div className="flex-inline project-info">
        <ArrowButton direction={{ ltr: true }} back />

        <div className="project-label">
          <Header text="Projects" className="lg-2-md" />
        </div>
      </div>
    </div>
  );
};

export { ProjectTag };
