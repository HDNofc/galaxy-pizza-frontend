import addUniqueIdToArrayOfObject from 'helpers/add-unique-id-array-of-items';

import personIcon from './icons/person.svg';

const menuLinks = [
  {
    icon: personIcon,
    to: '/login',
    text: 'Войти',
  },
  {
    to: '/order',
    text: 'Корзина',
  },
  {
    to: '/about',
    text: 'О нас',
  },
];

const menuLinksWithId = addUniqueIdToArrayOfObject(menuLinks, 'menu-');

export default menuLinksWithId;
