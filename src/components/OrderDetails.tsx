import {memo} from 'react';
import bw from '../assets/bw.png';
import { Button } from './Button';

const OrderDetails = memo(function () {
  return (
    <>
      <h2 className='font-semibold text-2xl px-2 sm:px-7 mb-4'>Order Details</h2>
      <div className='px-7 py-5 bg-black text-white flex flex-col gap-2 md:gap-0 md:flex-row mb-6'>
        <img src={bw} alt='Product Image' className='w-16 mr-5' />
        <div>
          <h4 className='font-semibold text-xl mb-2'>Body con dress</h4>
          <p className='flex gap-4 text-xs'>
            <span>Blue</span>
            <span>Size 32</span>
            <span>200 pcs</span>
          </p>
        </div>
        <p className='w-max md:ml-auto'>
          <span className='font-medium'>Order by:</span> Olofin Michael
        </p>
      </div>
      <div className='px-2 sm:px-7'>
        <h2 className='font-semibold text-lg mb-3'>Delivery details</h2>
        <section className='bg-[#f8f7f7] p-5 flex flex-wrap gap-3 rounded-xl mb-5'>
          <div className='w-full md:w-[48%]'>
            <p className='font-medium text-sm'>Fullname:</p>
            <p className='text-xs'>Olofin Michael Damilola</p>
          </div>
          <div className='w-full md:w-[48%]'>
            <p className='font-medium text-sm'>Item Quantity:</p>
            <p className='text-xs'>32</p>
          </div>
          <div className='w-full md:w-[48%]'>
            <p className='font-medium text-sm'>Delivery Address</p>
            <p className='text-xs'>
              Deji's house, Papa Oriola, Ibafo, Ogun State
            </p>
          </div>
          <div className='w-full md:w-[48%]'>
            <p className='font-medium text-sm'>Total Cost:</p>
            <p className='text-xs'>N 132,000</p>
          </div>
          <div className='w-full md:w-[48%]'>
            <p className='font-medium text-sm'>Email Address:</p>
            <p className='text-xs'>dejialkomolafe@gmail.com</p>
          </div>
          <div className='w-full md:w-[48%]'>
            <p className='font-medium text-sm'>Delivery State:</p>
            <p className='text-xs'>Lagos state</p>
          </div>
          <div className='w-full md:w-[48%]'>
            <p className='font-medium text-sm'>Phone number:</p>
            <p className='text-xs'>081******90</p>
          </div>
          <div className='w-full md:w-[48%]'>
            <p className='font-medium text-sm'>Delivery Region:</p>
            <p className='text-xs'>Lagos West</p>
          </div>
        </section>
        <form>
          <div className='mb-4'>
            <label className='block mb-2 font-semibold' htmlFor='orderStatus'>
              Order Status
            </label>
            <select
              name='orderStatus'
              className='p-2 w-full border border-black rounded-lg'
            >
              <option value='Pending'>Pending</option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
          <Button full>Update Order Status</Button>
        </form>
      </div>
    </>
  );
});

export default OrderDetails;
