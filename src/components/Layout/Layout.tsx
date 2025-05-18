import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import ResponsiveAppBar from '../Header/Header';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
    </>
  );
};

export default Layout;
