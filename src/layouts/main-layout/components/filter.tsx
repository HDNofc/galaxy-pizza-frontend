import { useEffect, useRef, useState } from 'react';
import * as S from '../main-layout.styles';

interface Props {
  children?: React.ReactNode;
}

const Filter = ({ children }: Props): React.ReactElement => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  const filterPos = () => {
    if (!filterRef.current) return;

    if (window.scrollY >= filterRef.current?.offsetTop) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    filterPos();
    window.addEventListener('scroll', filterPos);
    return () => {
      window.removeEventListener('scroll', filterPos);
    };
  }, []);

  return (
    <S.Filter ref={filterRef} $withShadow={isFixed}>
      <S.FilterContent>{children}</S.FilterContent>
    </S.Filter>
  );
};

export default Filter;
