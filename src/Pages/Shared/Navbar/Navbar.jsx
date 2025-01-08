import { NavLink } from 'react-router-dom';
import { GoSearch, GoHeart } from 'react-icons/go';
import { IoCartOutline } from 'react-icons/io5';

function Navbar() {
  const navItem = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/contact',
      text: 'Contact',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/sign-up',
      text: 'Sign Up',
    },
  ];
  return (
    <nav className='flex items-center justify-between pb-4 border-b-2 mt-9 border-b-secondary'>
      <h1 className='text-2xl font-semibold'>Exclusive</h1>
      <ul className='flex items-center justify-between gap-12 list-none'>
        {navItem.map((el, i) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-b-bgDark transition duration-300'
                : 'border-b-2 border-b-transparent'
            }
            to={el.path}
            key={i}
          >
            {el.text}
          </NavLink>
        ))}
      </ul>
      <div className='flex items-center justify-between gap-6'>
        <div className='relative '>
          <input
            className='block pl-5 pr-3 py-[7px] rounded-md bg-secondaryPink placeholder:text-xs
            placeholder:text-textGray
            outline-none
            transition duration-300
            focus:ring-1 focus:ring-textDark
            '
            type='text'
            placeholder='What are you looking for?'
          />
          <GoSearch className='absolute right-3 top-[25%] text-2xl' />
        </div>
        <div className='flex items-center gap-4 text-2xl'>
          <GoHeart />
          <IoCartOutline />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
