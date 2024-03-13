import {useState, useEffect} from 'react';

const useSmallScreen = () => {
  const smallScreen = window.matchMedia('(max-width: 640px)').matches;
  const [isSmallScreen, setIsSmallScreen] = useState(smallScreen);
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.matchMedia('(max-width: 640px)').matches);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmallScreen;
};

export default useSmallScreen;
