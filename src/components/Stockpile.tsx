import React, {memo, useReducer, useState} from 'react';
import {AddIcon, NavCloseIcon, SubtractIcon} from './SVGs';

const StockPile = memo(function ({
  toggleStockPile
}: {
  toggleStockPile: React.DispatchWithoutAction;
}) {
  const [number, setNumber] = useState(10);
  const [select, toggleSelect] = useReducer(state => !state, false);
  return (
    <>
      <header className='flex justify-between mb-6'>
        <h1 className='font-semibold text-2xl'>Stock Pile</h1>
        <button onClick={toggleStockPile}>
          <NavCloseIcon />
        </button>
      </header>
      <p className='text-[#666] text-sm'>
        Stock piling means you can save items for later after payment and have
        them delivered with other products when you have the money for delivery.
        this is to help users shed the cost of delivery
      </p>

      <hr className='my-3 bg-[#7e7e7e]' />

      <div>
        <h3 className='font-semibold mb-2'>Rules</h3>
        <ul className='text-[#666] text-sm list-disc px-4'>
          <li>Stock piling means you can save items for later after payment</li>
        </ul>
      </div>

      <hr className='my-3 bg-[#7e7e7e]' />

      <div className='mb-10'>
        <h3 className='font-semibold mb-3'>Select items to stock pile</h3>

        {/* Stockpile items  */}
        <div
          className={
            'border rounded-lg p-2 flex gap-2 items-start ' +
            (select ? 'border-black' : 'border-[#7e7e7e]')
          }
        >
          <div
            className={
              'border rounded w-4 h-4 aspect-square ' +
              (select ? 'bg-black' : 'border-[#7e7e7e]')
            }
            onClick={toggleSelect}
          />
          <div className='image min-w-[80px] w-1/5 aspect-square bg-[#faf9f9]' />
          <div>
            <p className='text-[#666] text-xs sm:text-sm font-medium mb-3'>
              Bad and bougee hot jeans
            </p>
            <p className='font-semibold text-sm sm:text-base'>NGN 3,500</p>
          </div>
          <div
            className='bg-[#fafaf9] p-2 rounded-3xl ml-auto flex flex-col items-center gap-1 w-max'
            onClick={e => e.stopPropagation()}
          >
            <button
              className='bg-white aspect-square p-1 rounded-full'
              onClick={() => number < 30 && setNumber(number + 1)}
            >
              <AddIcon />
            </button>
            <span className='font-semibold text-sm'>{number}</span>
            <button
              className='bg-white aspect-square p-1 rounded-full'
              onClick={() => number > 0 && setNumber(number - 1)}
            >
              <SubtractIcon />
            </button>
          </div>
        </div>
      </div>

      <button
        className='text-center bg-black text-white w-full py-3 rounded-lg'
        onClick={toggleStockPile}
      >
        Stock pile selected
      </button>
    </>
  );
});

export default StockPile;
