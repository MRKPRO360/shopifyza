import { NavLink } from 'react-router-dom';

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
    <nav>
      <h1 className='text-2xl'>Exclusive</h1>
      <ul className='flex list-none'>
        {navItem.map((el, i) => (
          <NavLink to={el.path} key={i}>
            {el.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
