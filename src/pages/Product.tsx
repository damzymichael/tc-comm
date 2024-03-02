import {memo} from 'react';

const Product = memo(function () {
  return (
    <>
      <h1 className='font-semibold text-2xl'>Product details</h1>
    </>
  );
});

export default Product;
