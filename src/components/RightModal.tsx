import React, {memo, useEffect, useRef} from 'react';

interface RightModalProps {
  children: React.ReactNode;
  open: boolean;
  toggle: () => void;
}

const RightModal = memo(function ({children, open, toggle}: RightModalProps) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [open]);
  return (
    <>
      {/* Dark Overlay  */}
      <div
        className={
          'fixed top-0 left-0 hidden sm:block h-screen z-20 bg-[#0000009C] transition-[opacity] ease-in duration-200 ' +
          (open ? 'w-screen opacity-100' : 'w-0 opacity-0')
        }
        onClick={toggle}
      />

      <section
        ref={ref}
        className={
          'fixed top-0 w-3/5 h-screen bg-white hidden sm:block max-w-[700px] z-30 pt-7 py-4 overflow-auto transition-all ease-in duration-500 ' +
          (open ? 'right-0' : '-right-full')
        }
      >
        {children}
      </section>
    </>
  );
});

export default RightModal;
