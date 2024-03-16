import {Fragment, memo, useEffect, useReducer, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import add from '../assets/add.svg';
import subtract from '../assets/subtract.svg';
import StockPile from '../components/Stockpile';
import {DeleteIconBW} from '../components/SVGs';

const Cart = memo(function () {
  const navigate = useNavigate();
  const [number, setNumber] = useState(10);
  const [stockPile, toggleStockpile] = useReducer(state => !state, false);

  useEffect(() => {
    document.body.style.overflow = stockPile ? 'hidden' : 'auto';
  }, [stockPile]);

  return (
    <>
      <header className='-mt-16 relative mb-10'>
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
          Cart
        </h2>
      </header>
      {/* Cart items  */}
      <section className='flex flex-col gap-3 mb-20'>
        {Array.from({length: 5}).map((_, i) => (
          <div className='bg-white p-3 rounded-lg flex gap-2' key={i}>
            {/* image  */}
            <div className='image w-2/5 bg-[#fafaf9] rounded-lg' />
            {/* text details  */}
            <div>
              <h4 className='text-[#666] mb-1 text-sm'>
                Bad and Bougee Hot Jeans
              </h4>
              <div className='p-1 border border-[#7e7e7e] rounded-lg flex items-center gap-2 w-max mb-1'>
                <div className='bg-[#14a370] w-3 h-3' />
                <span className='text-[10px]'>Green</span>
              </div>
              <p className='font-semibold'>NGN 3500</p>
            </div>
            <div className='bg-[#fafaf9] p-2 rounded-3xl flex flex-col items-center gap-5 w-max'>
              <button
                className='bg-white aspect-square p-2 rounded-full'
                onClick={() => number < 30 && setNumber(number + 1)}
              >
                <img src={add} alt='add icon' />
              </button>
              <span className='font-semibold text-sm'>{number}</span>
              <button
                className='bg-white aspect-square p-2 rounded-full'
                onClick={() => number > 0 && setNumber(number - 1)}
              >
                <img src={subtract} alt='decrease icon' />
              </button>
            </div>

            <button className='bg-[#111] px-2 rounded-lg'>
              <DeleteIconBW white />
            </button>
          </div>
        ))}
      </section>
      <div className='sticky bottom-0 py-2 bg-[#f5f5f5]'>
        <div className='flex justify-between items-center mb-4'>
          {/* Stock pile label  */}
          <div className='flex gap-[2px]'>
            <p className='bg-[#111] p-2 text-white text-sm'>Stock Pile</p>
            <div className='bg-[#111] w-10 clipped' />
          </div>
          {/* stock pile switch  */}
          <div className='flex items-center gap-2'>
            <p>Stock pile</p>
            <div
              className={
                'switch w-16 p-2 rounded-3xl transition-all ease-in duration-300 ' +
                (stockPile ? 'bg-black' : 'bg-[#D5E2F8]')
              }
              onClick={toggleStockpile}
            >
              <div
                className={
                  'eclipse bg-white w-1/2 aspect-square rounded-full transition-all ease-in duration-300 ' +
                  (stockPile ? 'translate-x-full' : 'translate-x-0')
                }
              />
            </div>
          </div>
        </div>
        <Link
          to='/delivery'
          className='bg-black text-white p-4 block w-full text-center rounded-lg'
        >
          Proceed
        </Link>
      </div>

      {/* Stockpile component  */}
      <Fragment>
        <div
          className={
            'fixed top-0 left-0 h-screen flex items-center justify-center bg-[#000000B2] z-10 transition-[opacity] ease-linear duration-300 ' +
            (stockPile ? ' opacity-100 w-screen' : 'opacity-0 w-0')
          }
          onClick={() => stockPile && toggleStockpile()}
        />
        {/* Add max height  */}
        <div
          className={
            'bg-white w-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-xl p-3 transition-all ease-linear duration-300 ' +
            (stockPile ? 'scale-100' : 'scale-0')
          }
          onClick={e => e.stopPropagation()}
        >
          <StockPile toggleStockPile={toggleStockpile} />
        </div>
      </Fragment>
    </>
  );
});

export default Cart;
