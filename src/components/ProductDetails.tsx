import {memo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {CartIcon, LikeIcon} from './SVGs';

interface ProductDetailsProps {
  /** id of product */
  id: number;
  /** name of product*/
  name: string;
  /** price of product in kobo */
  price: number;

  openCart?: () => void;
}

const ProductDetails = memo(function ({
  name,
  price,
  id,
  openCart
}: ProductDetailsProps) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    //Change to figure
    <div
      onClick={() =>
        navigate('product/' + id, {state: {prevPath: location.pathname}})
      }
      className='w-[25%] min-w-[180px] flex-shrink-0 rounded-md p-2 bg-white cursor-pointer'
    >
      <div className='image h-32 bg-[#faf9f9] rounded-md mb-3 p-1'>
        <div
          className='bg-white p-2 rounded w-max ml-auto'
          onClick={e => e.stopPropagation()}
        >
          <LikeIcon />
        </div>
      </div>
      <p className='text-[#666666] text-sm mb-2'>{name}</p>
      <p className='font-semibold mb-2'>
        NGN {(price / 100).toLocaleString('en-US')}
      </p>
      <div id='actions' className='flex gap-2'>
        <button
          className='border border-black rounded-md p-2'
          onClick={e => {
            e.stopPropagation();
            openCart && openCart();
          }}
        >
          <CartIcon />
        </button>
        <button className='bg-black text-white rounded-md p-2 text-sm flex-grow'>
          Buy now
        </button>
      </div>
    </div>
  );
});

export default ProductDetails;
