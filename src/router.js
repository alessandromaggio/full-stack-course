import VueRouter from 'vue-router';
import Contacts from './views/Contacts';
import Home from './views/Home';
import Order from './views/Order';

const routes = [
  { path: '/order/:id', component: Order, id: 'none' },
  { path: '/contacts', component: Contacts },
  { path: '*', component: Home },
];

export default new VueRouter({
  routes,
});
