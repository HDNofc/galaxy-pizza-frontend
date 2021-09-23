import { useEffect, useRef, useState } from 'react';
import * as S from '../main-template.styles';

interface Props {
  children?: React.ReactNode;
}

const Filter = ({ children }: Props): React.ReactElement => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (!filterRef.current) return;

    const cachedRef = filterRef.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio < 1) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      },
      {
        rootMargin: '-1px 0px 0px 0px',
        threshold: [1],
      }
    );

    observer.observe(cachedRef);

    return () => {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <S.Filter ref={filterRef} $withShadow={isFixed}>
      <S.FilterContent>{children}</S.FilterContent>
    </S.Filter>
  );
};

export default Filter;
