import { useEffect, useRef } from 'react';

const useDebounce = (callback: () => void, delay = 2000) => {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const debounced = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      callback();
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [callback, delay]);

  return debounced;
};

export default useDebounce;
