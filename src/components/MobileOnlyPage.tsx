import React, {memo, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useSmallScreen from '../hooks/useSmallScreen';

interface Props {
  children: React.ReactNode;
  navigateTo: string;
}

/** Wrapper that wraps around component and redirects away from the page when on a large screen.*/
const MobileOnlyPage = memo(({children, navigateTo}: Props) => {
  const isSmallScreen = useSmallScreen();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSmallScreen) navigate(navigateTo, {replace: true});
  }, [isSmallScreen]);

  return <>{children}</>;
});

export default MobileOnlyPage;
