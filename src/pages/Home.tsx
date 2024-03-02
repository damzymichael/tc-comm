import {memo} from 'react';
import ProductDetails from '../components/ProductDetails';

const Home = memo(function () {
  const fakeProducts = Array.from({length: 6}).map((_, i) => ({
    name: 'Bad and bougee Hot Jeans',
    price: 250000,
    id: i + 1
  }));
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
        <div className='flex gap-2 overflow-x-scroll categories'>
          {Array.from({length: 12}).map((_, i) => (
            <div
              key={i}
              className='bg-white p-2 flex items center gap-4 rounded-md'
            >
              <div className='w-5 h-5 bg-gray-500' />
              <p className='font-medium text-black'>Tops</p>
            </div>
          ))}
        </div>
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
