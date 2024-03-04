import {memo, useReducer, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {excludedLinks} from '../data';

import Search from './Search';
import TC from '../assets/tc.svg';
import searchIcon from '../assets/search.svg';
import cartIcon from '../assets/cart.svg';
import menu from '../assets/menu.svg';

const Header = memo(function () {
  const {pathname} = useLocation();
  const [search, toggleSearch] = useReducer(state => !state, false);
  const [nav, toggleNav] = useReducer(state => !state, false);

  useEffect(() => {
    document.body.style.overflow = search || nav ? 'hidden' : 'auto';
  }, [search, nav]);

  if (excludedLinks.includes(pathname)) return null;

  return (
    <>
      <header className='fixed top-0 left-0 w-full bg-[#f7f7f7] pb-0 z-20'>
        <div className='relative flex justify-between items-center p-3 mb-3'>
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
            <Link to='/cart'>
              <img src={cartIcon} alt='cart icon' className='w-6' />
            </Link>
          </div>
        </div>
        {search && <Search />}
      </header>
      {/* left-0 */}
      {/* -left-full  */}
      <nav
        className={
          'bg-white fixed top-0 z-40 w-3/5 p-3 pt-7 transition-all ease-in duration-500 ' +
          (nav ? 'h-screen navClipOpen' : 'h-0 navClip')
        }
      >
        <div className='flex justify-between mb-10'>
          <img src={TC} alt='brand icon' className='w-10' />
          <button onClick={toggleNav}>
            <svg
              width='20'
              height='20'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.71094 7L13.1016 12.3984L12.3984 13.1016L7 7.71094L1.60156 13.1016L0.898438 12.3984L6.28906 7L0.898438 1.60156L1.60156 0.898438L7 6.28906L12.3984 0.898438L13.1016 1.60156L7.71094 7Z'
                fill='#AAAAAA'
              />
            </svg>
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
            <svg
              width='16'
              height='21'
              viewBox='0 0 16 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 0C5.23858 0 3 2.23858 3 5C3 7.76142 5.23858 10 8 10C10.7614 10 13 7.76142 13 5C13 2.23858 10.7614 0 8 0ZM5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5Z'
                fill='#98A2B3'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 21C6.4595 21 4.22982 20.6502 2.55543 19.9174C1.73343 19.5576 0.897452 19.0427 0.411753 18.2974C0.156317 17.9054 -0.00516667 17.4437 0.000126279 16.9282C0.00537077 16.4174 0.173439 15.9281 0.455915 15.4728C1.82532 13.2656 4.62679 11 8 11C11.3732 11 14.1747 13.2656 15.5441 15.4728C15.8266 15.9281 15.9946 16.4174 15.9999 16.9282C16.0052 17.4437 15.8437 17.9054 15.5882 18.2974C15.1025 19.0427 14.2666 19.5576 13.4446 19.9174C11.7702 20.6502 9.5405 21 8 21ZM2.15539 16.5272C2.02372 16.7394 2.00077 16.8757 2.00002 16.9487C1.99932 17.017 2.01686 17.0973 2.08736 17.2055C2.25354 17.4605 2.65707 17.7787 3.35732 18.0852C4.72744 18.6848 6.67324 19 8 19C9.32676 19 11.2726 18.6848 12.6427 18.0852C13.3429 17.7787 13.7465 17.4605 13.9126 17.2055C13.9831 17.0973 14.0007 17.017 14 16.9487C13.9992 16.8757 13.9763 16.7394 13.8446 16.5272C12.7225 14.7185 10.4843 13 8 13C5.51566 13 3.27754 14.7185 2.15539 16.5272Z'
                fill='#98A2B3'
              />
            </svg>
            <p className='text-[#98A2B3]'>LOG IN</p>
          </div>
        </div>
      </nav>
      {search && (
        <div
          className='w-screen h-screen fixed bg-[#000000B2] z-10'
          onClick={toggleSearch}
        />
      )}
      {nav && (
        <div
          className='w-screen h-screen fixed bg-[#000000B2] z-30'
          onClick={toggleNav}
        />
      )}
    </>
  );
});

export default Header;
