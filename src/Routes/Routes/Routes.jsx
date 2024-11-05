import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/sign-up',
        element: <Signup />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
