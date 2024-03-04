//Categories component in here
import {memo, useReducer} from 'react';
import searchgrey from '../assets/searchgrey.svg';
import categories from '../assets/categories.svg';
import Categories from './Categories';

const Search = memo(function () {
  const [showCategories, toggleCategories] = useReducer(state => !state, false);
  return (
    <section className='bg-white w-screen py-4 p-3'>
      <h3 className='text-lg mb-4'>What are you looking for ?</h3>
      <form className='flex gap-3 mb-4'>
        <div className='flex gap-3 p-3 border border-[#D0D5DD] rounded-md flex-grow'>
          <img src={searchgrey} alt='search icon' />
          <input
            type='text'
            className='appearance-none outline-none'
            placeholder='Search here...'
          />
        </div>
        <button
          className='border border-[#D0D5DD] px-3 rounded-md'
          onClick={e => {
            e.preventDefault();
            toggleCategories();
          }}
        >
          <img src={categories} alt='icon' className='w-5' />
        </button>
      </form>
      {showCategories && (
        <div className='flex flex-col gap-3'>
          {Array.from({length: 2}).map((_, i) => (
            <Categories key={i} />
          ))}
        </div>
      )}
    </section>
  );
});

export default Search;
