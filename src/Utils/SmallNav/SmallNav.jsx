import Dropdown from '../Dropdown/Dropdown';

function SmallNav() {
  return (
    <div className='relative'>
      <div className='flex items-center justify-center gap-3 bg-bgDark min-h-12 text-bgLight'>
        <p className='text-sm font-light'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <span className='text-sm font-semibold underline '>Shop Now</span>

        <Dropdown />
      </div>
    </div>
  );
}

export default SmallNav;
