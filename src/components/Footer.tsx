import {memo} from 'react';

const Footer = memo(function () {
  return (
    <footer className='bg-black mt-4 text-white text-center py-3'>
      <p className='text-sm'>
        All rights reserved &copy; {new Date().getFullYear()} Tobi's closet
      </p>
      <p className='text-[0.75rem]'>
        Designed and developed by Michael Olofin | Click{' '}
        <a className='underline' href='https://wa.link/260kru' target='blank'>
          here
        </a>{' '}
        to contact developer
      </p>
    </footer>
  );
});

export default Footer;
