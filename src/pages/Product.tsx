import {memo, useState} from 'react';
import {fakeProducts} from '../data';
import {useParams, Navigate, useLocation} from 'react-router-dom';
import add from '../assets/add.svg';
import subtract from '../assets/subtract.svg';
import cartIcon from '../assets/cart.svg';
import Categories from '../components/Categories';

const Product = memo(function () {
  const [number, setNumber] = useState(10);
  const location = useLocation();
  const {id} = useParams<Record<string, string | undefined>>();
  const product = fakeProducts.find(prod => prod.id == +(id as string));
  if (!product) return <Navigate to={location.state.prevPath || '/'} replace />;
  return (
    <>
      <h4 className='text-[#7e7e7e] mb-3'>Cargo Pants</h4>
      <div className='flex justify-between mb-3'>
        <h2 className='font-semibold'>
          Bad and Bougee Secy <br /> Girl Shorts
        </h2>
        <p className='text-[#666666] font-semibold'>
          NGN {(product?.price / 100).toLocaleString('en-US')}
        </p>
      </div>
      <div className='bg-[#fafaf9] h-40 mb-3'>
        <button></button>
        <button></button>
      </div>
      <div className='flex gap-3 mb-6'>
        <div className='bg-[#fafaf9] w-[23%] h-20' />
        <div className='bg-[#fafaf9] w-[23%] h-20' />
        <div className='bg-[#fafaf9] w-[23%] h-20' />
        <div className='bg-[#fafaf9] w-[23%] h-20' />
      </div>

      <div id='categories' className='mb-6'>
        <h4 className='font-semibold mb-3'>Select colour</h4>
        <Categories />
      </div>

      <div id='categories' className='mb-6'>
        <h4 className='font-semibold mb-3'>Select size</h4>
        <Categories />
      </div>

      <div className='mb-5'>
        <h4 className='font-semibold mb-3'>Choose Quantity</h4>
        <div className='bg-[#fafaf9] p-3 rounded-3xl flex items-center gap-5 w-max'>
          <button
            className='bg-white aspect-square p-3 rounded-full'
            onClick={() => number > 0 && setNumber(number - 1)}
          >
            <img src={subtract} alt='decrease icon' />
          </button>
          <span className='font-semibold'>{number}</span>
          <button
            className='bg-white aspect-square p-3 rounded-full'
            onClick={() => number < 30 && setNumber(number + 1)}
          >
            <img src={add} alt='add icon' />
          </button>
        </div>
      </div>

      <div className='sticky bottom-0 flex gap-3 py-3'>
        <button className='bg-white px-4 rounded-lg'>
          <img src={cartIcon} alt='' />
        </button>
        <button className='bg-black text-white rounded-lg p-3 flex-grow'>
          Buy now for N{(product?.price / 100).toLocaleString('en-US')}
        </button>
      </div>
    </>
  );
});

export default Product;
