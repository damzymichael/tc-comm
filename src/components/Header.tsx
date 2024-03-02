import {memo} from 'react';
import TC from '../assets/tc.svg';
import searchIcon from '../assets/search.svg';
import cartIcon from '../assets/cart.svg';
import menu from '../assets/menu.svg';

const Header = memo(function () {
  return (
    <header className='fixed top-0 left-0 w-full bg-white p-3 flex justify-between items-center'>
      <button>
        <img src={menu} alt='menu icon' className='w-8' />
      </button>
      <img src={TC} alt='brand icon' className='w-10' />
      <div className='flex gap-5'>
        <img src={searchIcon} alt='search icon' className='w-6' />
        <img src={cartIcon} alt='cart icon' className='w-6' />
      </div>
    </header>
  );
});

export default Header;
