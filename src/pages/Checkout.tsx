import {memo} from 'react';
import {useNavigate} from 'react-router-dom';

const Checkout = memo(function () {
  const navigate = useNavigate();

  return (
    <>
      <header className='-mt-16 relative mb-6'>
        <button
          className='bg-white absolute w-10 z-10 aspect-square flex items-center justify-center rounded-lg'
          onClick={() => navigate(-1)}
        >
          <svg
            width='10'
            height='16'
            viewBox='0 0 10 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.375 1.25L1.625 8L8.375 14.75'
              stroke='#7E7E7E'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <h2 className='text-2xl font-semibold text-center translate-y-1'>
          Checkout
        </h2>
      </header>

      <section className='bg-white p-4 rounded-2xl mb-4'>
        <h2 className='mb-3 font-medium text-lg'>Order Summary</h2>

        <div className='border border-[#e7ecf6] rounded-lg p-3 flex gap-2 mb-3'>
          <div className='image bg-[#f9f9f9] w-1/5 aspect-square relative'>
            <p className='text-xs p-0.5 text-center absolute bottom-0 right-1/2 translate-x-1/2 bg-[#111] text-white'>
              Stockpile
            </p>
          </div>
          <div>
            <p className='text-[#666] text-sm font-semibold'>
              Bad and bougee hot jeans
            </p>
            <p className='font-semibold text-[#111]'>NGN 3500</p>
          </div>
          <p className='p-2 text-xs bg-[#111] self-center text-white rounded-full ml-auto'>
            24
          </p>
        </div>

        <div className='border border-[#e7ecf6] rounded-lg p-3 flex gap-2'>
          <div className='image bg-[#f9f9f9] w-1/5 aspect-square relative'>
            {/* <p className='text-xs p-0.5 text-center absolute bottom-0 right-1/2 translate-x-1/2 bg-[#111] text-white'>
              Stockpile
            </p> */}
          </div>
          <div>
            <p className='text-[#666] text-sm font-semibold'>
              Bad and bougee hot jeans
            </p>
            <p className='font-semibold text-[#111]'>NGN 3500</p>
          </div>
          <p className='p-2 bg-[#111] text-xs self-center text-white rounded-full ml-auto'>
            24
          </p>
        </div>
      </section>
      <button className='bg-black text-white w-full p-3 rounded-xl'>
        Check out
      </button>
    </>
  );
});

export default Checkout;
