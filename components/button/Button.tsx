import { FC, ReactNode } from 'react';
import '../../styles/home.module.scss';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ href, children }) => {
  return (
    <a href={href} className="button">
      {children}
    </a>
  );
};

export default Button;
