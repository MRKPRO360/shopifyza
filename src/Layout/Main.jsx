import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import SmallNav from '../Utils/SmallNav/SmallNav';

export default function Main() {
  return (
    <div className='max-w-[1545px] mx-auto'>
      <SmallNav />
      <div className='max-w-[1170px] mx-auto px-2 2xl:px-0'>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
