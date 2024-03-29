import {memo, MouseEvent} from 'react';
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
          ? 'bg-[#7e7e7e] py-2 px-2 rounded-lg flex items-center justify-center ' +
            (full ? 'w-full' : '')
          : 'bg-black text-white py-2 px-2 rounded-lg flex items-center justify-center ' +
            (full ? 'w-full' : '')
      }
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
});

export const PreventDefaultButton = ({
  onClick,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onClick && onClick(e);
  }
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
