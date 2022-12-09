/* eslint-disable no-unused-vars */
import Home from '../views/pages/home';
import Detail from '../views/pages/resto-detail';
import Favorite from '../views/pages/halaman-restoran-favorit';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
