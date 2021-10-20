import setUniqueIdToArrayOfObject from 'helpers/add-unique-id-to-array-of-items';

import food1 from 'assets/images/promo/food-1.jpg';
import food2 from 'assets/images/promo/food-2.jpg';
import food3 from 'assets/images/promo/food-3.jpg';
import food4 from 'assets/images/promo/food-4.jpg';
import food5 from 'assets/images/promo/food-5.jpg';

const promoImages = [
  {
    src: food1,
    alt: 'Выбери, оплати, получи!',
  },
  {
    src: food2,
    alt: 'Выбери, оплати, получи!',
  },
  {
    src: food3,
    alt: 'Выбери, оплати, получи!',
  },
  {
    src: food4,
    alt: 'Выбери, оплати, получи!',
  },
  {
    src: food5,
    alt: 'Выбери, оплати, получи!',
  },
];

const promoImagesWithId = setUniqueIdToArrayOfObject(promoImages, 'promo-');

export default promoImagesWithId;
