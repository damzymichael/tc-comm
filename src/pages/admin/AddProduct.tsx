import {FormEvent, memo} from 'react';
import {
  AddIcon,
  DeleteIcon,
  NavCloseIcon,
  SubtractIcon
} from '../../components/SVGs';
import ImageFileInput from '../../components/ImageFileInput';
import {Button, PreventDefaultButton} from '../../components/Button';

const Options = memo(({data}: {data: Array<string>}) => {
  return (
    <div className='flex flex-wrap gap-2 max-h-24 border p-1 rounded-lg overflow-auto'>
      {data.map((_, i) => (
        <div key={i}>
          <p className='flex flex-wrap gap-2 w-max items-center bg-[#f7f7f7] text-[#0000006B] border border-[#0000006B] rounded-lg p-1 px-2'>
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
        placeholder='Category'
        className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-4 w-full'
      />

      <input
        type='text'
        placeholder='Product Name'
        className='p-3 block mx-auto outline-none rounded-lg border-[1.5px] border-black placeholder-black mb-4 w-full'
      />

      <div className='mb-4'>
        <div className='flex flex-wrap gap-2 mb-2'>
          <input
            type='text'
            className='p-2 outline-none rounded-lg border-[1.5px] border-black placeholder-black w-40 flex-1'
            placeholder='Size'
          />
          <input
            type='text'
            className='p-2  outline-none rounded-lg border-[1.5px] border-black placeholder-black w-40 flex-1'
            placeholder='Color'
          />
          <input
            type='number'
            className='p-2  outline-none rounded-lg border-[1.5px] border-black placeholder-black w-40 flex-1'
            placeholder='Quantity'
          />
          <PreventDefaultButton className='bg-black px-3 p-2 text-white rounded-lg'>
            Save
          </PreventDefaultButton>
        </div>

        {toggle ? (
          <div>
            {Array.from({length: 3}).map((_, i) => (
              <div
                className='bg-[#f6f6f6] flex gap-2 flex-wrap items-center sm:justify-between p-1 px-2 border border-[#0000006B] rounded-lg mb-2'
                key={i}
              >
                <p className='min-w-[50px]'>Blue</p>
                <p className='min-w-[50px'>Size 6-10</p>
                <div className='border border-black p-1 text-sm w-max flex gap-2 items-center'>
                  <button className='bg-white p-2 aspect-square rounded-full'>
                    <SubtractIcon />
                  </button>
                  <input
                    type='number'
                    value={3000}
                    className='appearance-none outline-none bg-inherit w-10'
                  />
                  <span>pcs</span>
                  <button className='bg-white p-2 aspect-square rounded-full'>
                    <AddIcon />
                  </button>
                </div>
                <button>
                  <DeleteIcon />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <Options
            data={[
              '6-10 Red (12)',
              'L Green (12)',
              'XXL Blue (13)',
              'SM Red (6)',
              'XXL Blue (13)',
              'XXL Blue (13)',
              'XXL Blue (13)',
              'XXL Blue (13)',
              'XXL Blue (13)'
            ]}
          />
        )}
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
