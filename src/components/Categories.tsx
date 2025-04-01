import {memo} from 'react';

const Categories = memo(function () {
  return (
    <div className='flex w-max mx-auto gap-2 overflow-x-auto categories'>
      {Array.from({length: 5}).map((_, i) => (
        <div
          key={i}
          className='bg-white p-1 px-2 flex items-center gap-1 rounded-md cursor-pointer'
        >
          <div className='w-2 h-2 bg-gray-500' />
          <p className='font-medium text-black'>Tops</p>
        </div>
      ))}
    </div>
  );
});

export default Categories;
