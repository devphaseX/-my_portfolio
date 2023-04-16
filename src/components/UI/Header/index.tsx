import { mergeClass } from '@/lib';

interface HeaderProps {
  text: string;
  size?: string | number;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ text, size, className }) => (
  <h3
    className={mergeClass('header md-1-md', className ?? '')}
    style={
      typeof size !== 'undefined'
        ? { fontSize: typeof size === 'number' ? `${size}px` : size }
        : undefined
    }
  >
    {text}
  </h3>
);

export { Header };
