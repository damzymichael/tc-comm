import {memo, useReducer} from 'react';
import {productDetails} from '../../data';
import {ArrowRightIcon, SearchIcon} from '../../components/SVGs';
import bw from '../../assets/bw.png';
import RightModal from '../../components/RightModal';
import OrderDetails from '../../components/OrderDetails';
import useToggleOrNavigate from '../../hooks/useToggleOrNavigate';

//Differences
//-> border bottom color of button
//-> text color in button
//-> bg color of span number
//-> text color of span number

const Orders = memo(function () {
  const [orderDetails, toggleOrderDetails] = useReducer(state => !state, false);
  const ToggleOrNavigate = useToggleOrNavigate(toggleOrderDetails);
  return (
    <>
      <header className='mb-7'>
        <h3 className='font-semibold text-2xl'>Orders</h3>
      </header>
      <section>
        <header className='flex flex-col gap-4 items-start lg:flex-row lg:items-center justify-between mb-5'>
          <div className='flex gap-2'>
            <button className='font-medium text-[#344054] text-xs flex items-center gap-1 p-3 border-b border-b-[#E4E7EC]'>
              <span>All</span>
              <span className='bg-[#F0F2F5] px-2 rounded-2xl'>0</span>
            </button>
            <button className='font-medium text-black text-xs flex items-center gap-1 p-3 border-b border-b-black'>
              <span>Pending</span>
              <span className='bg-black text-white px-2  rounded-2xl'>0</span>
            </button>
            <button className='font-medium text-[#344054] text-xs flex items-center gap-1 p-3 border-b border-b-[#E4E7EC]'>
              <span>Completed</span>
              <span className='bg-[#F0F2F5] px-2 rounded-2xl'>0</span>
            </button>
          </div>
          <form className=''>
            <div className='flex gap-3 items-center rounded-xl p-2 border border-[##D0D5DD]'>
              <SearchIcon fill='#667185' />
              <input
                type='text'
                placeholder='Search here...'
                className='outline-none w-full p-1'
              />
            </div>
          </form>
        </header>

        <main className='overflow-x-auto'>
          <table className='text-sm w-full border-collapse min-w-[600px]'>
            <thead className='bg-[#F7F8FA]'>
              <tr className='border'>
                {['', 'Product', 'Customer', 'Date', 'Quantity', ''].map(
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
              {/* Toggle modal and show details or link to a new page with details  */}
              {productDetails.map((product, i) => (
                <tr
                  key={i}
                  className='border-[0.2px] border-b-[#717171] px-2'
                  onClick={() => ToggleOrNavigate('/admin/orders/1')}
                >
                  <td className='p-3 hidden sm:table-cell'>
                    <img src={bw} alt='product image' />
                  </td>
                  {Object.values(product).map((detail, i) => (
                    <td className='p-3' key={i}>
                      {detail}
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

      <RightModal open={orderDetails} toggle={toggleOrderDetails}>
        <OrderDetails />
      </RightModal>
    </>
  );
});

export default Orders;
