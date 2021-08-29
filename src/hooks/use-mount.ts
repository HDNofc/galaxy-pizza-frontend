import { useEffect } from 'react';

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useMount;
