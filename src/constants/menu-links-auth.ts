import addUniqueIdToArrayOfObject from 'helpers/add-unique-id-to-array-of-items';

const menuLinksAuth = [
  {
    to: '/profile',
    text: 'Профиль',
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

const menuLinksAuthWithId = addUniqueIdToArrayOfObject(menuLinksAuth, 'menu-');

export default menuLinksAuthWithId;
