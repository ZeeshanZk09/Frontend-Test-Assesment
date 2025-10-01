import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-black min-h-screen overflow-hidden'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
