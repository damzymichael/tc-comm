import {memo} from 'react';
import add from '../assets/add.svg';
import subtract from '../assets/subtract.svg';

interface QuantityProps {
  number: number;
  setNumber: (number: number) => void;
  reverse?: boolean;
  direction?: 'row' | 'col';
}

const Quantity = memo(function ({number, setNumber}: QuantityProps) {
  //Reverse
  //col or row
  return (
    <div className='bg-[#fafaf9] p-3 rounded-3xl flex items-center gap-5 w-max'>
      <button
        className='bg-white aspect-square p-3 rounded-full'
        onClick={() => number > 0 && setNumber(number - 1)}
      >
        <img src={subtract} alt='decrease icon' />
      </button>
      <span className='font-semibold'>{number}</span>
      <button
        className='bg-white aspect-square p-3 rounded-full'
        onClick={() => number < 30 && setNumber(number + 1)}
      >
        <img src={add} alt='add icon' />
      </button>
    </div>
  );
});

export default Quantity;
