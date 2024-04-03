import {memo, useReducer, useEffect, Fragment, useState} from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';
import {excludedLinks} from '../data';
import Search from './Search';
import {
  BrandIcon,
  CartIcon,
  MenuIcon,
  NavCloseIcon,
  ProfileIcon,
  SearchIcon
} from './SVGs';
import Footer from './Footer';

const reducerFunction = (state: boolean) => !state;

const Layout = memo(function () {
  const {pathname} = useLocation();
  const [search, toggleSearch] = useReducer(reducerFunction, false);
  const [nav, toggleNav] = useReducer(reducerFunction, false);
  const [display, setDisplay] = useState(true);
  const resetState = () => {
    if (nav) toggleNav();
    if (search) toggleSearch();
  };

  useEffect(() => {
    document.body.style.overflow = search || nav ? 'hidden' : 'auto';
    setDisplay(excludedLinks.includes(pathname) ? false : true);
    if (pathname.includes('product'))
      document.body.style.backgroundColor = 'white';
    else document.body.style.backgroundColor = '#f5f5f5';
  }, [search, nav, pathname]);

  return (
    <>
      {display && (
        <Fragment>
          {/* Desktop Navigation  */}
          <header className='fixed z-10 flex items-center justify-between top-0 left-0 p-3 w-full bg-[#f7f7f7]'>
            <BrandIcon />
            <nav className='text-[#606060] text-sm flex items-center gap-4'>
              <ul className='flex gap-3'>
                {['ORDERS', 'CART', 'FAVORITES', 'STOCKPILE', 'ACCOUNT'].map(
                  (link, i) => (
                    <li key={i} className='cursor-pointer'>
                      <a href='#'>{link}</a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </header>

          {/* Mobile Navigation  */}
          <header className='fixed md:hidden top-0 left-0 w-full bg-[#f7f7f7] py-2 z-20'>
            <div className='relative flex justify-between items-center p-3 '>
              <button onClick={toggleNav}>
                <MenuIcon width={30} height={30} />
              </button>
              <Link to='/' className=' absolute left-1/2 -translate-x-1/2'>
                <BrandIcon />
              </Link>
              <div className='flex gap-4'>
                <SearchIcon
                  fill='black'
                  width={27}
                  height={27}
                  onClick={() => !nav && toggleSearch()}
                />

                <Link to='/cart' onClick={resetState}>
                  <CartIcon width={27} height={27} />
                </Link>
              </div>
            </div>
          </header>
          {search && <Search />}

          <nav
            className={
              'bg-white md:hidden fixed top-0 z-40 w-3/5 p-3 pt-7 transition-all ease-in duration-300 ' +
              (nav ? 'h-screen navClipOpen' : 'h-0 navClip')
            }
          >
            <div className='flex justify-between mb-10'>
              <BrandIcon />
              <button onClick={toggleNav}>
                <NavCloseIcon />
              </button>
            </div>
            <ul className='flex flex-col gap-3 text-[#606060]'>
              {['ORDERS', 'CART', 'FAVORITES', 'STOCKPILE', 'ACCOUNT'].map(
                (nav, i) => (
                  <li key={i} className='cursor-pointer'>
                    <a href='#'>{nav}</a>
                  </li>
                )
              )}
            </ul>
            <div className='mt-[35vh]'>
              <h2 className='mb-2'>LIST AN ITEM</h2>
              <div className='flex gap-3'>
                <ProfileIcon />
                <p className='text-[#98A2B3]'>LOG IN</p>
              </div>
            </div>
          </nav>
          {search && (
            <div
              className='w-screen h-screen fixed bg-[#000000B2] z-10 sm:hidden'
              onClick={toggleSearch}
            />
          )}
          {nav && (
            <div
              className='w-screen h-screen fixed bg-[#000000B2] z-30 sm:hidden'
              onClick={toggleNav}
            />
          )}
        </Fragment>
      )}
      <main
        className={
          (!excludedLinks.includes(pathname) && 'mt-20') +
          ' relative overflow-x-hidden mb-5 p-3'
        }
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
});

export default Layout;
