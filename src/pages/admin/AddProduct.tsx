import {FormEvent, memo} from 'react';
import {NavCloseIcon} from '../../components/SVGs';
import ImageFileInput from '../../components/ImageFileInput';
import {Button, PreventDefaultButton} from '../../components/Button';

const Options = memo(({data}: {data: Array<string>}) => {
  return (
    <div className='flex gap-2'>
      {data.map((_, i) => (
        <div key={i}>
          <p className='flex gap-2 w-max items-center bg-[#f7f7f7] text-[#0000006B] border border-[#0000006B] rounded-lg p-1 px-2'>
            <span className='text-sm'>{_}</span>
            <PreventDefaultButton>
              <NavCloseIcon width={13} height={13} />
            </PreventDefaultButton>
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
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form className='px-3 sm:px-5 md:px-10 pb-3' onSubmit={handleSubmit}>
      <header className='flex justify-between items-center  mb-4'>
        <h2 className='font-semibold text-2xl'>
          {toggle ? 'Edit Product' : 'Add Product'}
        </h2>
        {toggle && (
          <PreventDefaultButton onClick={toggle}>
            <NavCloseIcon />
          </PreventDefaultButton>
        )}
      </header>
      <input
        type='text'
        placeholder='Product Name'
        className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-4 w-full'
      />

      <div className='mb-4'>
        <div className='flex gap-2 mb-2'>
          <input
            type='text'
            className='p-2 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black w-full'
            placeholder='Size'
          />
          <input
            type='number'
            className='p-2 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black w-full'
            placeholder='Quantity'
            min={1}
          />
          <PreventDefaultButton className='bg-black px-2 p-1 text-white rounded-lg'>
            Add
          </PreventDefaultButton>
        </div>
        <Options data={['L (14)', 'XL (12)', 'XXL (13)']} />
      </div>

      <div className='mb-4'>
        <div className='flex gap-2 mb-2'>
          <input
            type='text'
            className='p-2 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black w-full'
            placeholder='Color'
          />
          <input
            type='number'
            className='p-2 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black w-full'
            placeholder='Quantity'
            min={1}
          />
          <PreventDefaultButton className='bg-black px-2 p-1 text-white rounded-lg'>
            Add
          </PreventDefaultButton>
        </div>
        <Options data={['Red (11)', 'Green (20)', 'Blue (8)']} />
      </div>

      <input
        type='number'
        placeholder='Quantity'
        className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-4 w-full'
        min={1}
      />

      <ImageFileInput />

      <Button full> Add product</Button>
    </form>
  );
});

export default AddProduct;

{
  /* <div
  className='bg-[#fafaf9] p-2 rounded-3xl flex flex-col items-center gap-1 w-max'
  onClick={e => e.stopPropagation()}
>
  <button
    className='bg-white aspect-square p-1 rounded-full'
    onClick={() => number < 30 && setNumber(number + 1)}
  >
    <img src={add} alt='add icon' className='w-4' />
  </button>
  <span className='font-semibold text-sm'>{number}</span>
  <button
    className='bg-white aspect-square p-1 rounded-full'
    onClick={() => number > 0 && setNumber(number - 1)}
  >
    <img src={subtract} alt='decrease icon' className='w-4' />
  </button>
</div>; */
}
