import useSmallScreen from './useSmallScreen';
import {useNavigate} from 'react-router-dom';

const useToggleOrNavigate = (toggle: () => void) => {
  const navigate = useNavigate();
  const isSmallScreen = useSmallScreen();

  return (link: string) => (isSmallScreen ? navigate(link) : toggle());
};

export default useToggleOrNavigate;
