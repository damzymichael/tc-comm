import {Fragment, memo, useEffect, useReducer, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import add from '../assets/add.svg';
import subtract from '../assets/subtract.svg';
import StockPile from '../components/Stockpile';

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
                <img src={add} alt='add icon' className='w-6' />
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
              <svg
                width='14'
                height='14'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.4 3.2H9.6C9.6 2.77565 9.43143 2.36869 9.13137 2.06863C8.83131 1.76857 8.42435 1.6 8 1.6C7.57565 1.6 7.16869 1.76857 6.86863 2.06863C6.56857 2.36869 6.4 2.77565 6.4 3.2ZM4.8 3.2C4.8 2.35131 5.13714 1.53737 5.73726 0.937258C6.33737 0.337142 7.15131 0 8 0C8.84869 0 9.66263 0.337142 10.2627 0.937258C10.8629 1.53737 11.2 2.35131 11.2 3.2H15.2C15.4122 3.2 15.6157 3.28429 15.7657 3.43431C15.9157 3.58434 16 3.78783 16 4C16 4.21217 15.9157 4.41566 15.7657 4.56569C15.6157 4.71571 15.4122 4.8 15.2 4.8H14.4944L13.7856 13.072C13.7175 13.8708 13.352 14.6149 12.7615 15.1571C12.171 15.6993 11.3985 16.0001 10.5968 16H5.4032C4.60153 16.0001 3.82902 15.6993 3.23852 15.1571C2.64802 14.6149 2.28254 13.8708 2.2144 13.072L1.5056 4.8H0.8C0.587827 4.8 0.384344 4.71571 0.234315 4.56569C0.0842854 4.41566 0 4.21217 0 4C0 3.78783 0.0842854 3.58434 0.234315 3.43431C0.384344 3.28429 0.587827 3.2 0.8 3.2H4.8ZM10.4 8C10.4 7.78783 10.3157 7.58434 10.1657 7.43431C10.0157 7.28429 9.81217 7.2 9.6 7.2C9.38783 7.2 9.18434 7.28429 9.03432 7.43431C8.88429 7.58434 8.8 7.78783 8.8 8V11.2C8.8 11.4122 8.88429 11.6157 9.03432 11.7657C9.18434 11.9157 9.38783 12 9.6 12C9.81217 12 10.0157 11.9157 10.1657 11.7657C10.3157 11.6157 10.4 11.4122 10.4 11.2V8ZM6.4 7.2C6.61217 7.2 6.81566 7.28429 6.96569 7.43431C7.11571 7.58434 7.2 7.78783 7.2 8V11.2C7.2 11.4122 7.11571 11.6157 6.96569 11.7657C6.81566 11.9157 6.61217 12 6.4 12C6.18783 12 5.98434 11.9157 5.83431 11.7657C5.68429 11.6157 5.6 11.4122 5.6 11.2V8C5.6 7.78783 5.68429 7.58434 5.83431 7.43431C5.98434 7.28429 6.18783 7.2 6.4 7.2ZM3.808 12.936C3.84208 13.3355 4.02493 13.7077 4.32035 13.9788C4.61577 14.2499 5.00223 14.4002 5.4032 14.4H10.5968C10.9975 14.3998 11.3836 14.2494 11.6786 13.9783C11.9737 13.7072 12.1563 13.3352 12.1904 12.936L12.888 4.8H3.112L3.808 12.936Z'
                  fill='white'
                />
              </svg>
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
                'switch w-16 p-2 rounded-3xl transition-all ease-in duration-200 ' +
                (stockPile ? 'bg-black' : 'bg-[#D5E2F8]')
              }
              onClick={toggleStockpile}
            >
              <div
                className={
                  'eclipse bg-white w-1/2 aspect-square rounded-full transition-all ease-in duration-200 ' +
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
            'fixed top-0 left-0 h-screen flex items-center justify-center bg-[#000000B2] z-10 transition-[opacity] ease-linear duration-200 ' +
            (stockPile ? ' opacity-100 w-screen' : 'opacity-0 w-0')
          }
          onClick={() => stockPile && toggleStockpile()}
        />
        {/* Add max height  */}
        <div
          className={
            'bg-white w-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-xl p-3 transition-all ease-linear duration-200 ' +
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
