import AppLayout from 'components/app-layout';
import { useEffect } from 'react';
import Link from 'components/link';
import PageNotFoundTemplate from 'templates/page-not-found-template/page-not-found-template';

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
      <PageNotFoundTemplate>
        <p>Страница не найдена.</p>
        <p>
          Попробуйте начать с{' '}
          <Link to="/" standard>
            главной страницы
          </Link>
        </p>
      </PageNotFoundTemplate>
    </AppLayout>
  );
};

export default Order;
