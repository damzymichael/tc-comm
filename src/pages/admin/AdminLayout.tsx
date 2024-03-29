import {useReducer, memo, useEffect, Fragment} from 'react';
import {BrandIcon, HashIcon} from '../../components/SVGs';
import {Link} from 'react-router-dom';
import menu from '../../assets/menu.svg';
import {Outlet, useLocation} from 'react-router-dom';
import {NavCloseIcon} from '../../components/SVGs';

const linkInfo: {text: string; link: string}[] = [
  {text: 'Overview', link: '/admin/overview'},
  {text: 'Orders', link: '/admin/orders'},
  {text: 'Inventory', link: '/admin/inventory'}
];

interface NavigationProps {
  nav: boolean;
  toggleNav: () => void;
}
const Navigation = memo(function ({nav, toggleNav}: NavigationProps) {
  const {pathname} = useLocation();
  return (
    <Fragment>
      <BrandIcon className='mx-auto mb-10 hidden sm:block' />
      <div className='flex mt-3 justify-between sm:hidden'>
        <BrandIcon className='mb-10' />
        <div className='pt-1'>
          <NavCloseIcon className='w-10' onClick={toggleNav} />
        </div>
      </div>
      <nav>
        <ul>
          {linkInfo.map(({text, link}) => (
            <li
              className={
                'mb-3 p-2 text-sm cursor-pointer rounded-lg ' +
                (pathname === link ? 'bg-black text-white' : 'text-black')
              }
              key={text}
              onClick={() => nav && toggleNav()}
            >
              <Link to={link} className='flex gap-2 items-center'>
                <HashIcon black={pathname !== link} />
                <span> {text} </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        to='/admin'
        className='p-2 rounded-lg border border-black inline-block mt-7 text-sm'
      >
        Logout
      </Link>
    </Fragment>
  );
});

function AdminLayout() {
  const {pathname} = useLocation();
  document.body.style.backgroundColor = '#fafafa';
  const [nav, toggleNav] = useReducer(state => !state, false);
  useEffect(() => {
    document.body.style.overflowY = nav ? 'hidden' : 'auto';
  }, [nav]);
  return (
    <Fragment>
      {pathname !== '/admin' && (
        <div className='pl-4 pt-4 sm:hidden'>
          <button onClick={toggleNav}>
            <img src={menu} alt='menu icon' className='w-8' />
          </button>
        </div>
      )}

      {/* Navigation on desktop  */}
      {pathname !== '/admin' && (
        <section className='p-3 w-1/5 fixed top-0 hidden sm:block min-w-[180px] max-w-[200px] bg-white h-screen'>
          <Navigation nav={nav} toggleNav={toggleNav} />
        </section>
      )}

      {/* Navigation on mobile  */}
      {pathname !== '/admin' && (
        <Fragment>
          <section
            className={
              'fixed p-3 w-3/5 bg-white top-0 z-30 h-screen transition-all ease-in duration-300 ' +
              (nav ? 'left-0' : '-left-full')
            }
          >
            <Navigation nav={nav} toggleNav={toggleNav} />
          </section>
          <div
            className={
              'fixed top-0 left-0 block sm:hidden h-screen z-20 bg-[#0000009C] transition-[opacity] ease-in duration-300 ' +
              (nav ? 'w-screen opacity-100' : 'w-0 opacity-0')
            }
            onClick={toggleNav}
          />
        </Fragment>
      )}

      {/* Other pages  */}
      <main className={(pathname != '/admin' ? 'sm:ml-52' : '') + ' p-3 pt-5'}>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default AdminLayout;
