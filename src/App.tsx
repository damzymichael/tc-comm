import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserLayout from './components/UserLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import ScrollRestoration from './components/ScrollRestoration';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Delivery from './pages/Delivery';
import Login from './pages/admin/Login';
import Overview from './pages/admin/Overview';
import AdminLayout from './pages/admin/AdminLayout';
import Orders from './pages/admin/Orders';

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        {/* User's routes  */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='delivery' element={<Delivery />} />
        </Route>
        {/* Admin routes  */}
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Login />} />
          <Route path='overview' element={<Overview />} />
          <Route path='orders' element={<Orders />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
