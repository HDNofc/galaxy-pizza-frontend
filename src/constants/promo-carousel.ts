import setUniqueIdToArrayOfObject from 'helpers/add-unique-id-to-array-of-items';

import teslaSpaceDelivery from 'assets/images/promo/tesla-space-delivery.jpg';
import teslaSpaceDelivery2x from 'assets/images/promo/tesla-space-delivery@2x.jpg';
import teslaSpaceDeliveryWebp from 'assets/images/promo/tesla-space-delivery.webp';
import teslaSpaceDeliveryWebp2x from 'assets/images/promo/tesla-space-delivery@2x.webp';

import maskSpaceDelivery from 'assets/images/promo/mask-space-delivery.jpg';
import maskSpaceDelivery2x from 'assets/images/promo/mask-space-delivery@2x.jpg';
import maskSpaceDeliveryWebp from 'assets/images/promo/mask-space-delivery.webp';
import maskSpaceDeliveryWebp2x from 'assets/images/promo/mask-space-delivery@2x.webp';

import maskTwoPizzas from 'assets/images/promo/mask-2-pizzas.jpg';
import maskTwoPizzas2x from 'assets/images/promo/mask-2-pizzas@2x.jpg';
import maskTwoPizzasWebp from 'assets/images/promo/mask-2-pizzas.webp';
import maskTwoPizzasWebp2x from 'assets/images/promo/mask-2-pizzas@2x.webp';

import maskPizza from 'assets/images/promo/mask-pizza.jpg';
import maskPizza2x from 'assets/images/promo/mask-pizza@2x.jpg';
import maskPizzaWebp from 'assets/images/promo/mask-pizza.webp';
import maskPizzaWebp2x from 'assets/images/promo/mask-pizza@2x.webp';

const promoImages = [
  {
    jpg: {
      x1: teslaSpaceDelivery,
      x2: teslaSpaceDelivery2x,
    },
    webp: {
      x1: teslaSpaceDeliveryWebp,
      x2: teslaSpaceDeliveryWebp2x,
    },
    alt: 'Курьер доставляет пиццу в космосе за рулем Tesla',
  },
  {
    jpg: {
      x1: maskSpaceDelivery,
      x2: maskSpaceDelivery2x,
    },
    webp: {
      x1: maskSpaceDeliveryWebp,
      x2: maskSpaceDeliveryWebp2x,
    },
    alt: 'Курьер доставляет пиццу прямо до космической станции',
  },
  {
    jpg: {
      x1: maskTwoPizzas,
      x2: maskTwoPizzas2x,
    },
    webp: {
      x1: maskTwoPizzasWebp,
      x2: maskTwoPizzasWebp2x,
    },
    alt: 'Илон Маск презентует 2 новых вкуса пиццы',
  },
  {
    jpg: {
      x1: maskPizza,
      x2: maskPizza2x,
    },
    webp: {
      x1: maskPizzaWebp,
      x2: maskPizzaWebp2x,
    },
    alt: 'Илон Маск презентует свою новую разработку',
  },
];

const promoImagesWithId = setUniqueIdToArrayOfObject(promoImages, 'promo-');

export default promoImagesWithId;
