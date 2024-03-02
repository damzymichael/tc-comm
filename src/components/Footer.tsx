import {memo} from 'react';

const Footer = memo(function () {
  return (
    <footer className='bg-black text-white text-center py-3'>
      <p className='mb-4'>
        All rights reserved &copy; {new Date().getFullYear()} Tobi's closet
      </p>
      <p className='text-sm'>
        Designed by Deji and developed by Michael <br /> Click{' '}
        <a className='underline' href='https://wa.link/260kru' target='blank'>
          here
        </a>{' '}
        to contact developer
      </p>
    </footer>
  );
});

export default Footer;
