import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>Etusivu</a>
          </Link>
        </nav>
      </header>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
