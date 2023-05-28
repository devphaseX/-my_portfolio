import { IconDimension, IconTypeProps } from './@types';
import { computeIconDimension } from './util';

const ChevronRightIcon: React.FC<IconTypeProps> = ({ height, size, width }) => {
  return (
    <span
      style={{
        display: 'inline-block',
        ...computeIconDimension({ height, size, width } as IconDimension),
      }}
    >
      <svg
        width="24"
        height="15"
        viewBox="0 0 24 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.8894 6.9031H1.3872M21.8894 6.9031L16.3327 13.1338M21.8894 6.9031L16.3327 1.06183"
          stroke="black"
          strokeWidth="1.94709"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export { ChevronRightIcon };
