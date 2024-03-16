import {memo, useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {DeleteIcon, TickIcon, UploadIcon} from './SVGs';

interface Props {
  files?: File[];
  updateFiles?: () => void;
}

const ImageFileInput = memo(({}: Props) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
  }, []);

  const {getInputProps, getRootProps, isDragActive} = useDropzone({onDrop});
  const handleDelete = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i != index));
  };

  return (
    <>
      <h4 className='font-semibold text-lg mb-2'>Upload Images</h4>
      <div
        className='border-[1.5px] border-[#d0d5dd] border-dashed p-3 rounded-lg text-center text-sm mb-3'
        {...getRootProps()}
      >
        <div className='bg-[#F0F2F5] w-max aspect-square p-3 rounded-full mx-auto'>
          <UploadIcon />
        </div>
        <p className='mb-2 font-semibold'>
          {isDragActive
            ? 'Drop the files here...'
            : 'Drag and drop here to upload'}
        </p>
        <p className='text-xs text-[#98A2B3] mb-4'>PNG, JPG, JPEG or GIF</p>
        <div className='relative mb-7'>
          <p className='text-[#98A2B3] absolute left-1/2 -translate-x-1/2 -translate-y-3 bg-[#fafafa] p-1'>
            OR
          </p>
          <hr />
        </div>
        <label
          className='bg-black text-white px-3 p-2 rounded-md'
          onClick={e => e.preventDefault()}
        >
          Choose Files{' '}
          <input
            type='file'
            multiple
            className='w-0 h-0 opacity-0'
            {...getInputProps()}
          />
        </label>
      </div>
      {uploadedFiles.length
        ? uploadedFiles.map(({name, size}, i) => (
            <div className='flex items-center gap-3 p-1 mb-2' key={i}>
              <span className='block w-max aspect-square p-2 bg-[#E7F6EC] rounded-full'>
                <TickIcon />
              </span>
              <div className='text-sm'>
                <p className='font-semibold'>{name}t</p>
                <span className='font-medium text-[#98A2B3]'>
                  {(size / 1024).toFixed(2)} kB{' '}
                </span>
              </div>
              <button
                className='ml-auto'
                onClick={e => {
                  e.preventDefault();
                  handleDelete(i);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          ))
        : null}
      <hr className='bg-[#F0F2F5] mb-3' />
    </>
  );
});

export default ImageFileInput;
