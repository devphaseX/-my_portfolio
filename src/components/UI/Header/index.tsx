interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => (
  <h3 className="header md-1-md">{text}</h3>
);

export { Header };
