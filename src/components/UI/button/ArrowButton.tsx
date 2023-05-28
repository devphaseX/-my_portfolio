'use client';

import { useRouter } from 'next/navigation';
import { ChevronRightIcon } from '../icons/ChevronRight';
import { mergeClass } from '@/lib';
import { ChevronLeftIcon } from '../icons/ChevronLeft';

interface ArrowButtonProps {
  to?: string;
  back?: boolean;
  fill?: boolean;
  direction?: { ltr?: true; rtl?: never } | { rtl: true; ltr?: never };
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  to,
  back,
  fill,
  ...props
}) => {
  const router = useRouter();

  return (
    <div
      className={mergeClass(
        'view__icon flex center',
        (fill && 'view__icon-fill') || undefined
      )}
      onClick={() =>
        (typeof back !== 'undefined' && back && router.back()) ||
        (to && router.push(to))
      }
    >
      {props.direction?.ltr || !props.direction?.rtl ? (
        <ChevronLeftIcon width={22} height={14} />
      ) : (
        <ChevronRightIcon width={22} height={14} />
      )}
    </div>
  );
};

export { ArrowButton };
