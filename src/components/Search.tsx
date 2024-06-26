import {memo, useReducer} from 'react';
import Categories from './Categories';
import {CategoriesIcon, SearchIcon} from './SVGs';

const Search = memo(function () {
  const [showCategories, toggleCategories] = useReducer(state => !state, false);
  return (
    <section className='bg-white pt-4 px-3 w-screen'>
      <h3 className='text-lg mb-4'>What are you looking for ?</h3>
      <form className='flex gap-3 mb-4'>
        <div className='flex gap-3 p-3 border border-[#D0D5DD] rounded-md flex-grow'>
          <SearchIcon fill='#667185' />
          <input
            type='text'
            className='appearance-none outline-none w-full'
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
          <CategoriesIcon width={23} height={23} />
        </button>
      </form>
      {showCategories && (
        <div className='flex flex-col gap-3 mb-2'>
          {Array.from({length: 1}).map((_, i) => (
            <Categories key={i} />
          ))}
        </div>
      )}
    </section>
  );
});

export default Search;
