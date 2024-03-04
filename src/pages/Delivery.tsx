import {memo, useReducer} from 'react';
import {useNavigate} from 'react-router-dom';

const Delivery = memo(function () {
  const navigate = useNavigate();
  const [usePrevAddress, togglePrevAddressUse] = useReducer(
    state => !state,
    false
  );
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
          Delivery Details
        </h2>
      </header>
      <form autoComplete='off' action='/checkout'>
        <div className='bg-white p-5 pb-10 rounded-2xl mb-5'>
          <h2 className='font-semibold text-lg mb-3'>Delivery Form</h2>
          <div className='flex flex-col mb-2'>
            <label htmlFor='name'>Fullname</label>
            <input
              type='text'
              id='name'
              className='outline-none p-2 rounded-lg border border-[#d9d9d9]'
            />
          </div>

          <div className='flex flex-col mb-2'>
            <label htmlFor='phoneNumber'>Phone number</label>
            <input
              type='number'
              id='phoneNumber'
              className='outline-none p-2 rounded-lg border border-[#d9d9d9]'
            />
          </div>

          <div className='flex flex-col mb-2'>
            <label htmlFor='altPhoneNumber'>Alternative phone number</label>
            <input
              type='number'
              id='altPhoneNumber'
              className='outline-none p-2 rounded-lg border border-[#d9d9d9]'
            />
          </div>

          <div className='flex flex-col mb-2'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              className='outline-none p-2 rounded-lg border border-[#d9d9d9]'
            />
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor='address'>Billing Address</label>
            <input
              type='text'
              id='address'
              className='outline-none p-2 rounded-lg border border-[#d9d9d9]'
            />
          </div>

          <div className='flex items-center gap-5'>
            <div
              className={
                'switch w-16 p-2 rounded-3xl transition-all ease-in duration-200 ' +
                (usePrevAddress ? 'bg-black' : 'bg-[#D5E2F8]')
              }
              onClick={togglePrevAddressUse}
            >
              <div
                className={
                  'eclipse bg-white w-1/2 aspect-square rounded-full transition-all ease-in duration-200 ' +
                  (usePrevAddress ? 'translate-x-full' : 'translate-x-0')
                }
              />
            </div>
            <p>Use previous address</p>
          </div>
        </div>

        <button className='bg-black text-white w-full p-3 rounded-lg'>
          Check out
        </button>
      </form>
    </>
  );
});

export default Delivery;
