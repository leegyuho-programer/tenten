import { ReactNode } from 'react';
import MainHeader from '@/components/common/Header/MainHeader';
import Footer from '@/components/common/Footer';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
