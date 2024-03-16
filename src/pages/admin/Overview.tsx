import {useReducer} from 'react';
import {Button} from '../../components/Button';
import {ArrowRightIcon, Cube} from '../../components/SVGs';
import {Link} from 'react-router-dom';
import bw from '../../assets/bw.png';
import {productDetails} from '../../data';
import RightModal from '../../components/RightModal';
import OrderDetails from '../../components/OrderDetails';
import useToggleOrNavigate from '../../hooks/useToggleOrNavigate';
import {AddProductModal} from './Inventory';

function Overview() {
  const [orderDetails, toggleOrderDetails] = useReducer(state => !state, false);
  const toggleOrNavigateOrder = useToggleOrNavigate(toggleOrderDetails);

  const [addProduct, toggleAddProduct] = useReducer(state => !state, false);
  const toggleOrNavigateNew = useToggleOrNavigate(toggleAddProduct);
  return (
    <>
      <header className='flex items-center justify-between mb-7'>
        <h3 className='font-semibold text-2xl'>Overview</h3>
        <div className='flex gap-3'>
          <button className='border border-black px-2 rounded-lg text-sm'>
            Start sales
          </button>
          <Button onClick={() => toggleOrNavigateNew('/admin/add-product')}>
            <span className='text-sm'>Add product</span>
          </Button>
        </div>
      </header>

      {/* Statistics  */}
      <section className='flex gap-2 flex-wrap mb-6 sm:mb-10'>
        {/* Stat 1  */}
        <div className='bg-black w-full sm:w-[30%] p-3 rounded-xl text-white min-w-[200px]'>
          <header className='flex items-center gap-2 mb-5'>
            <span className='inline-block p-1 rounded-lg border border-white'>
              <Cube />
            </span>
            <h4 className='text-sm font-medium'>Total Sales</h4>
          </header>
          <aside className='mb-2'>
            <p className='flex gap-1 items-center'>
              <span className='inline-block bg-[#14a370] font-medium rounded-2xl p-1 py-0.5 text-[8px]'>
                10%
              </span>
              <span className='text-xs font-medium text-[#98a2b3]'>
                Compared to last month
              </span>
            </p>
          </aside>
          <p className='text-2xl font-semibold'>N1,200,300</p>
        </div>

        {/* Stat 2 */}
        <div className='bg-white w-full sm:w-[30%] p-3 rounded-xl border border-[#e4e7ec] min-w-[200px]'>
          <header className='flex items-center gap-2 mb-5'>
            <span className='inline-block p-1 rounded-lg border border-[#e4e7ec]'>
              <Cube black />
            </span>
            <h4 className='text-sm font-medium text-[#667185]'>
              Total Items Available
            </h4>
          </header>
          <aside className='mb-2'>
            <p className='flex gap-1 items-center'>
              <span className='inline-block bg-[#ffece5] font-medium rounded-2xl p-1 py-0.5 text-[8px] text-[#ad3307]'>
                10%
              </span>
              <span className='text-xs font-medium text-[#98a2b3]'>
                Compared to last month
              </span>
            </p>
          </aside>
          <p className='text-2xl font-semibold text-[#1d3739]'>407 items</p>
        </div>

        {/* Stat 3  */}
        <div className='bg-white w-full sm:w-[30%] p-3 rounded-xl border border-[#e4e7ec] text-white min-w-[200px]'>
          <header className='flex items-center gap-2 mb-5'>
            <span className='inline-block p-1 rounded-lg border border-[#e4e7ec]'>
              <Cube black />
            </span>
            <h4 className='text-sm font-medium text-[#667185]'>
              Total Customers
            </h4>
          </header>
          <aside className='mb-2'>
            <p className='flex gap-1 items-center'>
              <span className='inline-block bg-[#ffece5] font-medium rounded-2xl p-1 py-0.5 text-[8px] text-[#ad3307]'>
                10%
              </span>
              <span className='text-xs font-medium text-[#98a2b3]'>
                Compared to last month
              </span>
            </p>
          </aside>
          <p className='text-2xl font-semibold text-[#1d3739]'>20,000 users</p>
        </div>
      </section>

      <section>
        <header className='flex justify-between mb-3'>
          <h3 className='font-semibold text-xl'>Recent Orders</h3>
          <Link to='/admin/orders' className='font-medium text-sm'>
            View all
          </Link>
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
              {productDetails.map((product, i) => (
                <tr
                  key={i}
                  className='border-[0.2px] border-b-[#717171] px-2'
                  onClick={() => toggleOrNavigateOrder('/admin/orders/1')}
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

      <AddProductModal open={addProduct} toggle={toggleAddProduct} />
    </>
  );
}

export default Overview;
