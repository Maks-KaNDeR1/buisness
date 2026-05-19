import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import ClubDetail from './pages/ClubDetail';
import Registration from './pages/Registration';

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Outlet />
      <Toaster position="bottom-right" />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const clubsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/clubs',
  component: Clubs,
});

const clubDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/clubs/$clubId',
  component: ClubDetail,
});

const registrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Registration,
});


const routeTree = rootRoute.addChildren([
  indexRoute,
  clubsRoute,
  clubDetailRoute,
  registrationRoute,
]);


const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
