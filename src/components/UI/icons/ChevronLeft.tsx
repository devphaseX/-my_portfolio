import { IconTypeProps } from './@types';
import { computeIconDimension } from './util';

const ChevronLeftIcon: React.FC<IconTypeProps> = ({ height, size, width }) => {
  return (
    <span
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...computeIconDimension({ height, size, width }),
      }}
    >
      <svg
        width="17"
        height="10"
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 4.96791L15.2677 4.96791M2 4.96791L5.59592 1M2 4.96791L5.59592 8.68783"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export { ChevronLeftIcon };
