import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../Header/Header';

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
