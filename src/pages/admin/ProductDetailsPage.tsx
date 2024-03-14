//For small devices only
import ProductDetailsAdmin from '../../components/ProductDetailsAdmin';
import MobileOnlyPage from '../../components/MobileOnlyPage';

const ProductDetailsPage = () => {
  return (
    <MobileOnlyPage navigateTo='/admin/inventory'>
      <ProductDetailsAdmin />
    </MobileOnlyPage>
  );
};

export default ProductDetailsPage;
