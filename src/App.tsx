import {useEffect, useState} from 'react';

function App() {
  const largeScreen = window.matchMedia('(min-width: 640px)').matches;
  const [isAppDisabled, setIsAppDisabled] = useState(largeScreen);

  useEffect(() => {
    function handleResize() {
      setIsAppDisabled(window.matchMedia('(min-width: 768px)').matches);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isAppDisabled)
    return (
      <div className='h-screen flex items-center justify-center'>
        <h3 className='na-message text-center'>
          This website is not available on desktop <br /> Move along mate :)
        </h3>
      </div>
    );
  return (
    <div className='p-3'>
      <h1 className='text-center text-2xl font-bold'>TC Ecommerce</h1>
    </div>
  );
}

export default App;
