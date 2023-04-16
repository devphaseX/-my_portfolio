import '@/style/container.css';

interface ContainerProps {
  children: React.ReactNode;
}

interface LayoutContainerProps extends ContainerProps {}
const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => (
  <div className="layout-container">{children}</div>
);

interface ContentContainerProps extends ContainerProps {}
const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => (
  <div className="content-container">{children}</div>
);

export { LayoutContainer, ContentContainer };
