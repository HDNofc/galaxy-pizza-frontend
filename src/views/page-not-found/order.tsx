import AppLayout from 'components/app-layout';
import { useEffect } from 'react';
import Link from 'components/link';
import PageNotFoundLayout from 'layouts/page-not-found-layout/page-not-found-layout';

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const oldTitle = document.title;
    document.title = 'Страница не найдена';

    return () => {
      document.title = oldTitle;
    };
  }, []);

  return (
    <AppLayout>
      <PageNotFoundLayout>
        <p>Страница не найдена.</p>
        <p>
          Попробуйте начать с{' '}
          <Link to="/" standard>
            главной страницы
          </Link>
        </p>
      </PageNotFoundLayout>
    </AppLayout>
  );
};

export default Order;
