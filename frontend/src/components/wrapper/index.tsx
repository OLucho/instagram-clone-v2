import { ReactChild, ReactChildren } from 'react';
import { Header } from '../header';

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
