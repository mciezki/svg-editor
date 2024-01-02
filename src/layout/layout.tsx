import { Outlet } from 'react-router-dom';
import { NavbarComponent } from '../components/navbar';

export default function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}
