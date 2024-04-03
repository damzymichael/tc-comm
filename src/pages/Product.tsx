import {memo, useState} from 'react';
import {fakeProducts} from '../data';
import {useParams, Navigate, useLocation} from 'react-router-dom';
import {AddIcon, CartIcon, LikeIcon, SubtractIcon} from '../components/SVGs';

const Product = memo(function () {
  const [number, setNumber] = useState(10);
  const location = useLocation();
  const {id} = useParams<Record<string, string | undefined>>();
  const product = fakeProducts.find(prod => prod.id == +(id as string));
  if (!product) return <Navigate to={location.state.prevPath || '/'} replace />;
  return (
    <section className='flex flex-col md:flex-row gap-3 md:items-start'>
      <header className='block md:hidden mb-3'>
        <h4 className='text-[#7e7e7e] mb-3'>Cargo Pants</h4>
        <div className='flex justify-between'>
          <h2 className='font-semibold'>
            Bad and Bougee Secy <br /> Girl Shorts
          </h2>
          <p className='text-[#666666] font-semibold'>
            NGN {(product?.price / 100).toLocaleString('en-US')}
          </p>
        </div>
      </header>
      <div className='bg-[#faf9f9] h-60 md:h-auto md:self-stretch md:w-1/2 p-1 rounded-md'>
        <div className='bg-white w-max aspect-square p-2 rounded ml-auto cursor-pointer'>
          <LikeIcon width={25} height={25} />
        </div>
      </div>
      {/* Details of product  */}
      <section className='md:w-1/2'>
        <header className='hidden md:block'>
          <h4 className='text-[#7e7e7e] mb-3'>Cargo Pants</h4>
          <div className='flex justify-between mb-6'>
            <h2 className='font-semibold'>
              Bad and Bougee Secy <br /> Girl Shorts
            </h2>
            <p className='text-[#666666] font-semibold'>
              NGN {(product?.price / 100).toLocaleString('en-US')}
            </p>
          </div>
        </header>

        <div id='select-color' className='mb-6'>
          <h4 className='font-semibold mb-3'>Select colour</h4>
          <ul className='text-xs sm:text-sm flex gap-2 overflow-x-auto'>
            {['Green', 'Red', 'Purple', 'Orange', 'Black', 'Brown'].map(
              item => (
                <li
                  key={item}
                  className={
                    (item == 'Red' ? 'border-black' : 'border-[##D0D5DD]') +
                    ' border-[0.5px] p-1 px-2 rounded cursor-pointer'
                  }
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div id='select-size' className='mb-6'>
          <h4 className='font-semibold mb-3'>Select colour</h4>
          <ul className='text-xs md:text-sm flex gap-2 overflow-x-auto'>
            {['UK-10', 'UK-11', 'UK-12', 'UK-13', 'UK-14', 'UK-15'].map(
              item => (
                <li
                  key={item}
                  className={
                    (item == 'UK-12' ? 'border-black' : 'border-[##D0D5DD]') +
                    ' border-[0.5px] p-1 px-2 rounded cursor-pointer'
                  }
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className='mb-5'>
          <h4 className='font-semibold mb-3'>Choose Quantity</h4>
          <div className='bg-[#fafaf9] p-3 rounded-3xl flex items-center gap-5 w-max'>
            <button
              className='bg-white aspect-square p-3 rounded-full'
              onClick={() => number > 0 && setNumber(number - 1)}
            >
              <SubtractIcon />
            </button>
            <span className='font-semibold'>{number}</span>
            <button
              className='bg-white aspect-square p-3 rounded-full'
              onClick={() => number < 30 && setNumber(number + 1)}
            >
              <AddIcon />
            </button>
          </div>
        </div>

        <div className='flex gap-3'>
          <button className='bg-[#f5f5f5] px-4 rounded-lg'>
            <CartIcon />
          </button>
          <button className='bg-black text-white rounded-lg p-3 flex-grow'>
            Buy now for N{(product?.price / 100).toLocaleString('en-US')}
          </button>
        </div>
      </section>
    </section>
  );
});

export default Product;
