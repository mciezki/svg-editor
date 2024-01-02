import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import { routes } from './routes/routes';

export default function App() {
  const router = createBrowserRouter([
    {
      id: 'root',
      path: '/svg-editor/',
      Component: Layout,
      children: routes.map((route) => {
        return {
          index: route.index,
          Component: route.component,
          path: route.route,
        };
      }),
    },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}
