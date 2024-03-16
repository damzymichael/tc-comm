import {memo, useReducer, useEffect, Fragment, useState} from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';
import {excludedLinks} from '../data';
import Search from './Search';
import TC from '../assets/tc.svg';
import searchIcon from '../assets/search.svg';
import cartIcon from '../assets/cart.svg';
import menu from '../assets/menu.svg';
import {NavCloseIcon, ProfileIcon} from './SVGs';
import Footer from './Footer';

const reducerFunction = (state: boolean) => !state;

const Layout = memo(function () {
  const {pathname} = useLocation();
  const [search, toggleSearch] = useReducer(reducerFunction, false);
  const [nav, toggleNav] = useReducer(reducerFunction, false);
  const [display, setDisplay] = useState(false);
  const resetState = () => {
    if (nav) toggleNav();
    if (search) toggleSearch();
  };

  useEffect(() => {
    document.body.style.overflow = search || nav ? 'hidden' : 'auto';
    if (excludedLinks.includes(pathname)) setDisplay(false);
  }, [search, nav, pathname]);
  
  return (
    <>
      {display && (
        <Fragment>
          {/* Desktop Navigation  */}
          <header className='fixed flex items-center justify-between top-0 left-0 p-3 w-full bg-[#f7f7f7]'>
            <img src={TC} alt='brand icon' className='w-9' />
            <form></form>
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
                <img src={menu} alt='menu icon' className='w-8' />
              </button>
              <Link to='/' className=' absolute left-1/2 -translate-x-1/2'>
                <img src={TC} alt='brand icon' className='w-10' />
              </Link>
              <div className='flex gap-5'>
                <img
                  src={searchIcon}
                  alt='search icon'
                  className='w-6'
                  onClick={() => !nav && toggleSearch()}
                />
                <Link to='/cart' onClick={resetState}>
                  <img src={cartIcon} alt='cart icon' className='w-6' />
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
              <img src={TC} alt='brand icon' className='w-10' />
              <button onClick={toggleNav}>
                <NavCloseIcon />
              </button>
            </div>
            <ul className='flex flex-col gap-3 text-[#606060]'>
              {['WOMEN', 'BAGS', 'BRANDS', 'ASSESORIES', 'CATEGORIES'].map(
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
      <main className='mt-20 mb-5 p-3'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
});

export default Layout;
