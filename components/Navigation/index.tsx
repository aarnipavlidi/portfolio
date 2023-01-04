import { INavigationFields } from '@/types/contentful/contentful';
import Link from 'next/link';
import classNames from 'classNames/bind';
import styles from './Navigation.module.css';
interface NavigationProps {
  navigation: INavigationFields;
}

const Navigation: React.FC<NavigationProps> = ({ navigation }) => {
  const cx = classNames.bind(styles);
  const getCurrentLinks = navigation.navigationLinks.map(value => value.fields);

  return (
    <header className="container mx-auto px-5 bg-slate-100">
      <nav className="pt-5 flex justify-between">
        <div className="basis-1/2 self-center">
          <h1 className="font-pier-sans text-2xl">Portfolio</h1>
        </div>
        <div className="basis-1/2 flex flex-row gap-5">
          {getCurrentLinks && getCurrentLinks.map((link, index) => {
            return (
              <Link key={`${link.entryName}-${index}`} href={link.linkHref} legacyBehavior>
                <a className="font-pier-sans text-lg">{link.linkName}</a>
              </Link>
            );
          })
          }
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
