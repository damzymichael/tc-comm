import {memo} from 'react';
import {NavCloseIcon} from '../../components/SVGs';
import ImageFileInput from '../../components/ImageFileInput';
import {Button} from '../../components/Button';

const Options = memo(({data}: {data: Array<string>}) => {
  return (
    <div className='flex gap-2'>
      {data.map((_, i) => (
        <div key={i}>
          <p className='flex gap-2 w-max items-center bg-[#f7f7f7] text-[#0000006B] border border-[#0000006B] rounded-lg p-1 px-2'>
            <span className='text-sm'>{_}</span>
            <button>
              <NavCloseIcon width={13} height={13} />
            </button>
          </p>
        </div>
      ))}
    </div>
  );
});

interface Props {
  toggle?: () => void;
}

const AddProduct = memo(({toggle}: Props) => {
  return (
    <form className='px-3 sm:px-5 md:px-10 pb-3'>
      <header className='flex justify-between items-center  mb-4'>
        <h2 className='font-semibold text-2xl'>
          {toggle ? 'Edit Product' : 'Add Product'}
        </h2>
        {toggle && (
          <button
            onClick={e => {
              e.preventDefault();
              toggle();
            }}
          >
            <NavCloseIcon />
          </button>
        )}
      </header>
      <input
        type='text'
        placeholder='Product Name'
        className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-4 w-full'
      />

      <div className='mb-4'>
        <select
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-2 w-full'
          id='size'
        >
          <option value='' hidden>
            Sizes
          </option>
          <option value='12'>Size 12</option>
          <option value='13'>Size 13</option>
          <option value='14'>Size 14</option>
        </select>
        <Options data={['Size 12', 'Size 13', 'Size 14']} />
      </div>

      <div className='mb-4'>
        <select
          className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-2 w-full'
          id='size'
        >
          <option value='' hidden>
            Color
          </option>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
        </select>
        <Options data={['Red', 'Green', 'Blue']} />
      </div>

      <input
        type='number'
        placeholder='Quantity'
        className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-4 w-full'
      />

      <ImageFileInput />

      <Button full> Add product</Button>
    </form>
  );
});

export default AddProduct;
