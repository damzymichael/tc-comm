import {memo} from 'react';
import {Spinner} from './SVGs';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
  loading?: boolean;
}

export const Button = memo(function ({
  loading,
  full,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={
        loading
          ? 'bg-[#7e7e7e] p-1 px-2 rounded-lg flex items-center justify-center ' +
            (full ? 'w-full' : '')
          : 'bg-black text-white p-1 px-2 rounded-lg flex items-center justify-center ' +
            (full ? 'w-full' : '')
      }
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
});
