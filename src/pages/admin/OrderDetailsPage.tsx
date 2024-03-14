//For small devices only
import OrderDetails from '../../components/OrderDetails';
import MobileOnlyPage from '../../components/MobileOnlyPage';

const OrderDetailsPage = () => {
  return (
    <MobileOnlyPage navigateTo='/admin/orders'>
      <OrderDetails />
    </MobileOnlyPage>
  );
};

export default OrderDetailsPage;
