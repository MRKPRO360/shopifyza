import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';

import gaming from '../../../assets/images/game.png';
import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';

function SaleCard() {
  return (
    <div className='w-[280px]'>
      <div className='relative bg-secondary'>
        <div className=''>
          <img className='px-10 py-9' src={gaming} alt='gamepad' />
        </div>
        <span className='absolute px-3 py-1 text-xs rounded-md top-3 left-3 bg-tertiary text-texLight'>
          -30%
        </span>
        <div className='absolute space-y-2 right-3 top-3'>
          <GoHeart className='p-1 text-3xl rounded-full cursor-pointer bg-bgLight' />
          <IoEyeOutline className='p-1 text-3xl rounded-full cursor-pointer bg-bgLight' />
        </div>
      </div>
      <div className='space-y-2 text-base font-medium'>
        <p className='mt-4'>Havit Hv G92 Gamepad</p>
        <div className='space-x-4'>
          <span className='text-tertiary'>$120</span>
          <span className='line-through text-textGray'>$160</span>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex items-center '>
            <TiStarFullOutline className='text-xl text-lightYellow' />
            <TiStarFullOutline className='text-xl text-lightYellow' />{' '}
            <TiStarFullOutline className='text-xl text-lightYellow' />{' '}
            <TiStarFullOutline className='text-xl text-lightYellow' />{' '}
            <TiStarHalfOutline className='text-xl text-lightYellow' />
          </div>
          <span className='text-sm font-semibold text-textGray'>(78)</span>
        </div>
      </div>
      {/* <IoEyeSharp /> */}
    </div>
  );
}

export default SaleCard;
