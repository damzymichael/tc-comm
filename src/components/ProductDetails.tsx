import {memo} from 'react';
import cartIcon from '../assets/cart.svg';
import {Link, useLocation} from 'react-router-dom';

interface ProductDetailsProps {
  /** id of product */
  id: number;
  /** name of product*/
  name: string;
  /** price of product in kobo */
  price: number;
}

const ProductDetails = memo(function ({name, price, id}: ProductDetailsProps) {
  const location = useLocation();
  return (
    //Change to figure
    <Link
      to={'product/' + id}
      state={{prevPath: location.pathname}}
      className='w-[47%] flex-shrink-0 rounded-md p-2 bg-white'
    >
      <div className='image h-32 bg-[#faf9f9] rounded-md mb-3 p-1'>
        <div className='w-[12%] aspect-square bg-white rounded ml-auto' />
      </div>
      <p className='text-[#666666] text-sm mb-2'>{name}</p>
      <p className='font-semibold mb-2'>
        NGN {(price / 100).toLocaleString('en-US')}
      </p>
      <div id='actions' className='flex gap-2'>
        <button className='border border-black rounded-md p-3'>
          <img src={cartIcon} alt='add to cart icon' className='w-4' />
        </button>
        <button className='bg-black text-white rounded-md p-2 text-sm flex-grow'>
          Buy now
        </button>
      </div>
    </Link>
  );
});

export default ProductDetails;
