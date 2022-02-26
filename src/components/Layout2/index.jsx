import { Outlet } from 'react-router-dom';
import VerticalMenu from '../VerticalMenu';

const Layout2 = () => (
  <div className="flex justify-center">
    <VerticalMenu />
    <Outlet />
  </div>
);

export default Layout2;
