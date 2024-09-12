import { redirect } from 'react-router-dom';
import Home from './home/home';
import Customers from './customers/customers';
import Reservations from './reservations/reservations';
import Planners from './planners/planners';

export const routes = [
  { index: true, loader: () => redirect('home') },
  { path: 'home', element: <Home />, text: 'Home' },
  { path: 'customers', element: <Customers />, text: 'Customers' },
  { path: 'reservations', element: <Reservations />, text: 'Reservations' },
  { path: 'planners', element: <Planners />, text: 'Planners' }
];
