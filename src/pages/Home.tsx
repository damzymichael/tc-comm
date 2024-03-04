import {memo} from 'react';
import {fakeProducts} from '../data';
import ProductDetails from '../components/ProductDetails';
import Categories from '../components/Categories';

const Home = memo(function () {
  return (
    <>
      <section className='bg-black text-white rounded-lg p-3 px-5 mb-6'>
        <h2 className='text-2xl my-12 font-bold'>
          Your favorite plug for <br /> quality thrifted items
        </h2>
        <button className='text-black bg-white p-3 rounded-lg mb-3'>
          Shop now
        </button>
      </section>

      {/* Categories  */}
      <div id='categories' className='mb-6'>
        <h4 className='font-medium mb-3'>Categories</h4>
        <Categories />
      </div>

      {/* Top items  */}
      <section>
        <h4 className='font-medium mb-4'>Top Items</h4>
        {Array.from({length: 3}).map((_, i) => (
          <div className='flex gap-2 overflow-x-scroll mb-4' key={i}>
            {fakeProducts.map((prod, i) => (
              <ProductDetails {...prod} key={i} />
            ))}
          </div>
        ))}
      </section>
    </>
  );
});

export default Home;
