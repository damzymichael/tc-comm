import {memo, useReducer} from 'react';
import {Button} from '../../components/Button';
import searchGrey from '../../assets/searchgrey.svg';
import {prodDetails} from '../../data';
import bw from '../../assets/bw.png';
import {ArrowRightIcon} from '../../components/SVGs';
import RightModal from '../../components/RightModal';
import ProductDetailsAdmin from '../../components/ProductDetailsAdmin';
import useToggleOrNavigate from '../../hooks/useToggleOrNavigate';

const Inventory = memo(() => {
  const [productDetails, toggleProductDetails] = useReducer(
    state => !state,
    false
  );
  const ToggleOrNavigate = useToggleOrNavigate(toggleProductDetails);
  return (
    <>
      <header className='flex items-center justify-between mb-7'>
        <h3 className='font-semibold text-2xl'>Inventory</h3>
        <Button>
          <span className='text-sm'>Add product</span>
        </Button>
      </header>

      <section>
        <header className='flex flex-col gap-2 items-start lg:flex-row lg:items-center justify-between mb-5'>
          <div className='flex gap-2'>
            <button className='font-medium text-[#344054] text-xs flex items-center gap-1 p-3 border-b border-b-[#E4E7EC]'>
              <span>All</span>
              <span className='bg-[#F0F2F5] px-2 rounded-2xl'>0</span>
            </button>
            <button className='font-medium text-black text-xs flex items-center gap-1 p-3 border-b border-b-black'>
              <span>In Stock</span>
              <span className='bg-black text-white px-2  rounded-2xl'>0</span>
            </button>
            <button className='font-medium text-[#344054] text-xs flex items-center gap-1 p-3 border-b border-b-[#E4E7EC]'>
              <span>Sold out</span>
              <span className='bg-[#F0F2F5] px-2 rounded-2xl'>0</span>
            </button>
          </div>
          <form className='w-max'>
            <div className='flex gap-3 items-center rounded-xl p-2 border border-[##D0D5DD]'>
              <img src={searchGrey} alt='search icon' />
              <input
                type='text'
                placeholder='Search here...'
                className='outline-none'
              />
            </div>
          </form>
        </header>

        <main className='overflow-x-auto'>
          <table className='text-sm w-full border-collapse min-w-[600px]'>
            <thead className='bg-[#F7F8FA]'>
              <tr className='border'>
                {['', 'Product', 'Sizes', 'Quantity', 'Colors', ''].map(
                  (head, i) => (
                    <th
                      key={i}
                      className={
                        'text-left p-3 ' + (i == 0 && 'hidden sm:table-cell')
                      }
                    >
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className='bg-white w-full'>
              {prodDetails.map((product, i) => (
                <tr
                  key={i}
                  className='border-[0.2px] border-b-[#717171] px-2'
                  // change parameter to real id
                  onClick={() => ToggleOrNavigate('/admin/inventory/1')}
                >
                  <td className='p-3 hidden sm:table-cell'>
                    <img src={bw} alt='product image' />
                  </td>
                  {Object.values(product).map((detail, i) => (
                    <td className='p-3' key={i}>
                      {typeof detail == 'object'
                        ? detail.map((det, i, {length}) => (
                            <span key={i}>
                              {det + (i != length - 1 ? ', ' : '')}
                            </span>
                          ))
                        : detail}
                    </td>
                  ))}
                  <td className='cursor-pointer'>
                    <ArrowRightIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>

      <RightModal open={productDetails} toggle={toggleProductDetails}>
        <ProductDetailsAdmin />
      </RightModal>

      <RightModal open toggle={() => console.log('haha')}>
       <div></div>
      </RightModal>
    </>
  );
});

export default Inventory;
