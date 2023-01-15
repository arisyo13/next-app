import { useCallback, useEffect, useState } from 'react';

interface GetIsMobile {
    isMobile: boolean
}

export const useGetIsMobile = (): GetIsMobile => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const getIsMobile = useCallback((width: number) => width <= 1024, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onWindowChange = useCallback((e: any) => {
    setIsMobile(getIsMobile(e.target.innerWidth));
  }, [getIsMobile]);

  useEffect(() => {
    window.addEventListener('resize', onWindowChange);
  }, [onWindowChange]);

  useEffect(() => {
    setIsMobile(getIsMobile(window.innerWidth));
  }, [getIsMobile]);

  return {
    isMobile
  };
};

