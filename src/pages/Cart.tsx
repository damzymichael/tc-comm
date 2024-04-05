import {Fragment, memo, useEffect, useReducer, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import StockPile from '../components/Stockpile';
import {
  AddIcon,
  BackIcon,
  DeleteIconBW,
  SubtractIcon
} from '../components/SVGs';
import DarkOverlay from '../components/DarkOverlay';

const Cart = memo(function () {
  const navigate = useNavigate();
  const [number, setNumber] = useState(10);
  const [stockPile, toggleStockpile] = useReducer(state => !state, false);

  useEffect(() => {
    document.body.style.overflow = stockPile ? 'hidden' : 'auto';
  }, [stockPile]);

  return (
    <>
      <header className='relative mb-10'>
        <button
          className='bg-white absolute w-10 z-10 aspect-square flex items-center justify-center rounded-lg'
          onClick={() => navigate(-1)}
        >
          <BackIcon />
        </button>
        <h2 className='text-2xl font-semibold text-center translate-y-1'>
          Cart
        </h2>
      </header>
      {/* Cart items  */}
      <section className='flex flex-wrap gap-3 mb-20'>
        {Array.from({length: 5}).map((_, i) => (
          <div
            className='bg-white w-full md:w-[48%] p-3 rounded-lg flex gap-2'
            key={i}
          >
            {/* image  */}
            <div className='image w-2/5 bg-[#fafaf9] rounded-lg' />
            {/* text details  */}
            <div>
              <h4 className='text-[#666] mb-1 text-xs sm:text-sm'>
                Bad and Bougee Hot Jeans
              </h4>
              <div className='p-1 border border-[#7e7e7e] rounded-lg flex items-center gap-1 w-max mb-1'>
                <div className='bg-[#14a370] w-2 h-2' />
                <span className='text-[10px]'>Green</span>
              </div>
              <p className='font-semibold text-sm sm:taxt-base'>NGN 3500</p>
            </div>
            <div className='bg-[#fafaf9] p-2 rounded-3xl flex flex-col ml-auto items-center gap-5 w-max'>
              <button
                className='bg-white aspect-square p-2 rounded-full'
                onClick={() => number < 30 && setNumber(number + 1)}
              >
                <AddIcon />
              </button>
              <span className='font-semibold text-sm'>{number}</span>
              <button
                className='bg-white aspect-square p-2 rounded-full'
                onClick={() => number > 0 && setNumber(number - 1)}
              >
                <SubtractIcon />
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
                'switch w-12 p-1 rounded-3xl transition-all ease-in duration-300 ' +
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

      {/* Stockpile modal component and overlay  */}
      <Fragment>
        <DarkOverlay
          display={stockPile}
          toggleDisplay={() => stockPile && toggleStockpile()}
          zIndex={10}
          desktopDisplay
        />
        <section
          className={
            'bg-white max-h-[85vh] w-[95%] sm:w-4/5 md:w-3/5 overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-xl p-3 transition-all ease-linear duration-300 ' +
            (stockPile ? 'scale-100' : 'scale-0')
          }
          onClick={e => e.stopPropagation()}
        >
          <StockPile toggleStockPile={toggleStockpile} />
        </section>
      </Fragment>
    </>
  );
});

export default Cart;
