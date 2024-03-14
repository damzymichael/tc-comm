import {memo} from 'react';
import {DeleteIcon, TickIcon, UploadIcon} from './SVGs';

const ImageFileInput = memo(() => {
  return (
    <>
      <h4 className='font-semibold text-lg mb-2'>Upload Images</h4>
      <div className='border-[1.5px] border-[#d0d5dd] border-dashed p-3 rounded-lg text-center text-sm mb-3'>
        <div className='bg-[#F0F2F5] w-max aspect-square p-3 rounded-full mx-auto'>
          <UploadIcon />
        </div>
        <p className='mb-2 font-semibold'>Drag and drop here to upload</p>
        <p className='text-xs text-[#98A2B3] mb-4'>PNG, JPG, JPEG or GIF</p>
        <div className='relative mb-7'>
          <p className='text-[#98A2B3] absolute left-1/2 -translate-x-1/2 -translate-y-3 bg-white p-1'>
            OR
          </p>
          <hr />
        </div>
        <label className='bg-black text-white px-3 p-2 rounded-md'>
          Browse Files{' '}
          <input type='file' multiple className='w-0 h-0 opacity-0' />
        </label>
      </div>
      <div className='flex items-center gap-3 border-b border-[#F0F2F5] p-3 mb-4'>
        <span className='block w-max aspect-square p-2 bg-[#E7F6EC] rounded-full'>
          <TickIcon />
        </span>
        <div>
          <p className='font-semibold'>Name of document</p>
          <span className='font-medium text-[#98A2B3]'>13 MB </span>
        </div>
        <button className='ml-auto'>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
});

export default ImageFileInput;
