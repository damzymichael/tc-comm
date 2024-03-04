import {memo} from 'react';

const Categories = memo(function () {
  return (
    <div className='flex gap-2 overflow-x-scroll categories'>
      {Array.from({length: 12}).map((_, i) => (
        <div
          key={i}
          className='bg-white p-2 flex items center gap-4 rounded-md'
        >
          <div className='w-5 h-5 bg-gray-500' />
          <p className='font-medium text-black'>Tops</p>
        </div>
      ))}
    </div>
  );
});

export default Categories;
