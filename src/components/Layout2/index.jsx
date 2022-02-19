import { Outlet } from 'react-router-dom';
import VerticalMenu from '../VerticalMenu';
// import Footer from '../Footer';

const Layout2 = () => {
  console.log('workin');
  return (
    <div className="flex justify-center">
      <VerticalMenu />
      <Outlet />
    </div>
  );
};

export default Layout2;
