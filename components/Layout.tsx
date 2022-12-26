import Navigation from '@/components/Navigation';

interface LayoutProps {
  children: React.ReactNode;
  fontVariable?: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={props.fontVariable}>
      <Navigation />
      <main>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
