import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  innerRoute?: boolean;
}

const Button: FC<ButtonProps> = ({
  href,
  children,
  innerRoute,
}) => {
  let unwrappedLinkElement = (
    <a href={href} className="button">
      <span className="bt-pm-ct">{children}</span>
      <span className="bt-sc-bg"></span>
    </a>
  );
  return innerRoute ? (
    <Link href={href}>{unwrappedLinkElement}</Link>
  ) : (
    unwrappedLinkElement
  );
};

export default Button;
