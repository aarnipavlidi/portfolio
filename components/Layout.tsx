interface LayoutProps {
  children: React.ReactNode;
  fontVariable?: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={props.fontVariable}>
      <main>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
