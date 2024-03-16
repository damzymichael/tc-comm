//Product details component for modal on large screens and page on small screens
import {memo, useEffect, useReducer, useRef} from 'react';
import bw from '../assets/bw.png';
import {orderDetails} from '../data';
import {Button} from './Button';
import AddProduct from '../pages/admin/AddProduct';

const ProductDetailsAdmin = memo(() => {
  const [editProduct, toggleEditProduct] = useReducer(state => !state, false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current as HTMLDivElement;
    container.scrollIntoView({behavior: 'smooth', block: 'start'});
  }, [editProduct]);
  return (
    <div className='relative' ref={containerRef}>
      <h2 className='font-semibold text-2xl px-2 sm:px-7 mb-4'>
        Order Details
      </h2>
      <div className='px-7 py-5 bg-black text-white flex flex-col items-start gap-2 md:gap-0 md:flex-row mb-6'>
        <img src={bw} alt='Product Image' className='w-16 mr-5' />
        <div>
          <h4 className='font-semibold text-xl mb-2'>Body con dress</h4>
          <p className='flex gap-4 text-xs mb-3'>
            <span>Blue</span>
            <span>Red</span>
            <span>Purple</span>
          </p>
          <p className='flex gap-4 text-xs mb-3'>
            <span>Size</span>
            <span>Size</span>
            <span>Size</span>
          </p>
          <p className='text-xs'>200 pcs</p>
        </div>
        <button
          className='w-max md:ml-auto mt-3 sm:nt-0'
          onClick={toggleEditProduct}
        >
          Edit Item
        </button>
      </div>
      <div className='px-2 sm:px-7'>
        <h2 className='font-semibold text-lg mb-3'>Order History</h2>
        <table className='text-sm w-full border-collapse mb-7'>
          <thead className='bg-[#eee]'>
            <tr className='border'>
              {['Customer', 'Quantity', 'Size', 'Color'].map((head, i) => (
                <th key={i} className='text-left p-3'>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-[#F8F7F7] w-full'>
            {orderDetails.map((product, i) => (
              <tr key={i} className='border-[0.2px] border-b-[#717171] px-3'>
                {Object.values(product).map((detail, i) => (
                  <td className='p-3' key={i}>
                    {detail}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Button full onClick={toggleEditProduct}>
          Edit Item
        </Button>
      </div>

      <div
        className={
          'bg-[#fafafa] absolute z-10 right-0 w-full sm:p-3 transition-all ease-in duration-300 ' +
          (editProduct
            ? 'top-0 h-auto overflow-auto editOpen'
            : 'top-full h-0 overflow-hidden edit')
        }
      >
        <AddProduct toggle={toggleEditProduct} />
      </div>
    </div>
  );
});

export default ProductDetailsAdmin;
