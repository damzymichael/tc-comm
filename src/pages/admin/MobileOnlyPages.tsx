//Pages for small devices
import React, {memo, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useSmallScreen from '../../hooks/useSmallScreen';
import OrderDetails from '../../components/OrderDetails';
import ProductDetailsAdmin from '../../components/ProductDetailsAdmin';
import AddProduct from './AddProduct';

interface MobileOnlyProps {
  children: React.ReactNode;
  navigateTo: string;
}

const MobileOnlyPage = memo(({children, navigateTo}: MobileOnlyProps) => {
  const isSmallScreen = useSmallScreen();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSmallScreen) navigate(navigateTo, {replace: true});
  }, [isSmallScreen]);

  return <>{children}</>;
});

export const OrderDetailsPage = () => {
  return (
    <MobileOnlyPage navigateTo='/admin/orders'>
      <OrderDetails />
    </MobileOnlyPage>
  );
};

export const ProductDetailsPage = () => {
  return (
    <MobileOnlyPage navigateTo='/admin/inventory'>
      <ProductDetailsAdmin />
    </MobileOnlyPage>
  );
};

export const AddNewProductPage = () => {
  return (
    <MobileOnlyPage navigateTo='/admin/add-product'>
      <AddProduct />
    </MobileOnlyPage>
  );
};
