import {memo, useEffect, useState, useRef} from 'react';
import {fakeProducts} from '../data';
import ProductDetails from '../components/ProductDetails';
import Categories from '../components/Categories';
import stubbornTobi from '../assets/IMG_4458.jpg';
import DarkOverlay from '../components/DarkOverlay';

const Home = memo(function () {
  const [cartDetails, setCartDetails] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    document.body.style.overflowY = cartDetails ? 'hidden' : 'auto';
    if (ref.current && cartDetails) {
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [cartDetails]);
  return (
    <>
      <section className='bg-black text-white rounded-lg p-3 px-5 mb-6'>
        <h2 className='text-xl sm:text-2xl sm:my-12 my-6 font-bold'>
          Your One Stop Store for Budget
          <br /> Friendly Unique Pieces
        </h2>
        <button className='text-black bg-white p-3 rounded-lg mb-3'>
          Shop now
        </button>
      </section>
      {/* Full screen image  */}
      <img
        src={stubbornTobi}
        alt='fake Image'
        className='w-screen h-[250px] sm:h-[320px] absolute left-0 object-cover'
      />
      <section className='description sm:mt-[370px] mt-[290px] text-center mb-8'>
        <h3 className='font-semibold text-2xl sm:text-3xl'>
          Explore our products
        </h3>
        <p className='text-base sm:text-xl font-light'>
          At Tobicloset, we sell affordable{' '}
          <span className='font-medium'>
            Bodysuits, Croptops, Joggers, etc.
          </span>
          That will help you stay in style.
          <br className='hidden sm:block' /> Our sole aim is to help you slay on
          a budget and our pieces are uniquely hand picked providing you
          <br className='hidden sm:block' /> with multiple choices of colors
          that fits in to any style.
        </p>
      </section>
      {/* Categories  */}
      <section id='categories' className='mb-8 sm:w-3/5 mx-auto text-center'>
        <h4 className='font-medium mb-3 text-2xl'>Categories</h4>
        <Categories />
      </section>
      {/* Top items  */}
      <section>
        <h4 className='font-medium mb-4 text-2xl text-center'>Top Items</h4>
        <div className='sm:w-[90%] md:w-4/5 mx-auto'>
          {Array.from({length: 3}).map((_, i) => (
            <div className='flex gap-2 overflow-x-auto mb-4' key={i}>
              {fakeProducts.map((prod, i) => (
                <ProductDetails
                  {...prod}
                  openCart={() => setCartDetails(true)}
                  key={i}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
      
      {/* Dark overlay for add to cart modal */}
      <DarkOverlay
        display={cartDetails}
        toggleDisplay={() => setCartDetails(false)}
      />

      {/* Select parameters for add to cart component  */}
      <section
        className={
          (cartDetails ? 'bottom-0' : '-bottom-full') +
          ' fixed w-screen bg-[#f5f5f5]  left-0 z-20 min-h-44 max-h-72 overflow-y-auto rounded-t-3xl p-3 transition-[bottom] duration-300'
        }
      >
        <h2 className='font-semibold text-xl mb-4'>Add to cart</h2>
        <div className='flex flex-wrap gap-3'>
          <div className='bg-[#faf9f9] w-full sm:w-[48%] min-h-52 rounded-md' />
          <section ref={ref} style={{scrollMargin: 20}}>
            <div id='select-color' className='mb-3'>
              <h4 className='font-semibold mb-3'>Select colour</h4>
              <ul className='text-sm flex gap-2 flex-wrap p-1'>
                {['Green', 'Red', 'Purple', 'Orange', 'Black', 'Brown'].map(
                  item => (
                    <li
                      key={item}
                      className={
                        (item == 'Red' ? 'border-black' : 'border-[##D0D5DD]') +
                        ' border p-[1px] px-2 rounded cursor-pointer'
                      }
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div id='select-size' className='mb-6'>
              <h4 className='font-semibold mb-3'>Select size</h4>
              <ul className='text-sm flex gap-2 flex-wrap p-1'>
                {['UK-10', 'UK-11', 'UK-12', 'UK-13', 'UK-14', 'UK-15'].map(
                  item => (
                    <li
                      key={item}
                      className={
                        (item == 'UK-12'
                          ? 'border-black'
                          : 'border-[##D0D5DD]') +
                        ' border p-[1px] px-2 rounded cursor-pointer'
                      }
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <button className='bg-black text-white rounded-lg p-3'>
              Add to cart
            </button>
          </section>
        </div>
      </section>
    </>
  );
});

export default Home;
