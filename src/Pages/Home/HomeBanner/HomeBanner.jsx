import Carousel from '../Carousel/Carousel';
import SideNav from '../SideNav/SideNav';

function HomeBanner() {
  return (
    <div className='flex'>
      <div className='basis-56'>
        <SideNav />
      </div>
      <div className='w-[82%]'>
        <Carousel />
      </div>
    </div>
  );
}

export default HomeBanner;
