import Link from 'next/link';

const Navigation: React.FC = (props) => {
  return (
    <header>
      <nav>
        <Link href="/" legacyBehavior>
          <a className="font-pier-sans">Etusivu</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
