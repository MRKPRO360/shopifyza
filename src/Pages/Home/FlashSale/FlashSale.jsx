import SectionTitle from '../../../Utils/SectionTitle/SectionTitle';
import StyledCountdown from './Countdown';

function FlashSale() {
  return (
    <div className='mb-16 mt-36'>
      <SectionTitle title={"Today's"} />
      <div className='flex items-end gap-[87px]'>
        <h1 className='text-4xl font-semibold'>Flash Sales</h1>
        <StyledCountdown />
      </div>
    </div>
  );
}

export default FlashSale;
