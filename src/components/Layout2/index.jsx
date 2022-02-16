import { Outlet } from 'react-router-dom';
import VerticalMenu from '../VerticalMenu';

const Layout2 = () => {
  console.log('workin');
  return (
    <div className="flex justify-center">
      <VerticalMenu />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout2;
