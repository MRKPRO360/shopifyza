import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import SmallNav from '../Utils/SmallNav/SmallNav';

export default function Main() {
  return (
    <div className='max-w-[1526] mx-auto'>
      <SmallNav />
      <div className='max-w-[1280px] mx-auto'>
        <Navbar />
        <div className='my-4 lg:my-16'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
