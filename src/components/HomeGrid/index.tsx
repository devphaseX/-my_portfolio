interface HomeGridProps {
  children: React.ReactNode;
}

const HomeGrid: React.FC<HomeGridProps> = ({ children }) => (
  <div className="home-grid">{children}</div>
);

export { HomeGrid };
