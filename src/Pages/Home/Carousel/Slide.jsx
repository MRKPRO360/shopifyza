import apple from '../../../assets/images/apple.png';
import iPhone from '../../../assets/images/hero.png';

import { BsArrowRight } from 'react-icons/bs';

function Slide() {
  const flexICenter = 'flex items-center';
  return (
    <div
      className={`${flexICenter} text-primaryLight bg-bgDark justify-between`}
    >
      <div className='flex-col gap-5 pl-16 pt-14'>
        <div className={`${flexICenter} `}>
          <img className='w-10' src={apple} alt='apple logo' />
          <small className='text-xs text-texLight'>iPhone 14 Series</small>
        </div>
        <h1
          style={{
            lineHeight: 1.3,
          }}
          className='my-5 text-5xl font-semibold '
        >
          Up to 10% <br />
          off Voucher
        </h1>

        <button
          className={`text-[16px] font-medium underline underline-bg-white ${flexICenter} gap-2 pb-12 pt-1`}
        >
          <span>Shop Now</span>
          <BsArrowRight className='text-[24px]' />
        </button>
      </div>
      <div className=''>
        <img className='w-full h-full' src={iPhone} alt='iphone' />
      </div>
    </div>
  );
}

export default Slide;
