import { Navbar, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

import { routes } from '../routes/routes';

export function NavbarComponent() {
  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {routes.map((route) => (
        <NavLink to={route.route} className='flex items-center'>
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='flex items-center gap-x-2 p-1 font-medium'
            placeholder=''
            key={route.title}
          >
            {route.title}
          </Typography>
        </NavLink>
      ))}
    </ul>
  );

  return (
    <Navbar className='mx-auto max-w-screen-xl px-4 py-2' placeholder=''>
      <div className='container mx-auto flex items-center justify-center text-blue-gray-900'>
        <div className='block'>{navList}</div>
      </div>
    </Navbar>
  );
}
