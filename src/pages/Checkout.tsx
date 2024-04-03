import {memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {BackIcon} from '../components/SVGs';

const Checkout = memo(function () {
  const navigate = useNavigate();

  return (
    <>
      <header className='relative mb-14'>
        <button
          className='bg-white absolute w-10 z-10 aspect-square flex items-center justify-center rounded-lg'
          onClick={() => navigate(-1)}
        >
          <BackIcon />
        </button>
        <h2 className='text-2xl font-semibold text-center translate-y-1'>
          Checkout
        </h2>
      </header>

      <section className='bg-white p-4 rounded-2xl mb-4'>
        <h2 className='mb-3 font-medium text-lg'>Order Summary</h2>
        <div className='flex flex-wrap gap-2'>
          <div className='border border-[#e7ecf6] rounded-lg p-3 flex gap-1 mb-3 w-full sm:w-[48%] lg:w-[32%]'>
            <div className='image bg-[#f9f9f9] w-1/4 min-w-[75px] aspect-square relative'>
              <p className='text-[8px] sm:text-[10px] p-0.5 text-center absolute bottom-0 right-1/2 translate-x-1/2 bg-[#111] text-white'>
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

          <div className='border border-[#e7ecf6] rounded-lg p-3 flex gap-2 mb-3 w-full sm:w-[48%] lg:w-[32%]'>
            <div className='image bg-[#f9f9f9] w-1/4 aspect-square relative'></div>
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

          <div className='border border-[#e7ecf6] rounded-lg p-3 flex gap-2 mb-3 w-full sm:w-[48%] lg:w-[32%]'>
            <div className='image bg-[#f9f9f9] w-1/4 aspect-square relative'>
              <p className='text-[8px] sm:text-[10px] p-0.5 text-center absolute bottom-0 right-1/2 translate-x-1/2 bg-[#111] text-white'>
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
        </div>
      </section>
      <button className='bg-black text-white w-full sm:w-3/5 mx-auto block p-3 rounded-xl'>
        Check out
      </button>
    </>
  );
});

export default Checkout;
