const pizzas = [
  {
    _id: 'id-1',
    name: 'Цыпленок Флорентина',
    description:
      'Сливочно-шпинатный соус, сыр моцарелла, нежная куриная грудка, хрустящий бекон, сочные томаты',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Chicken-Florentina-traditional%20(1).jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Chicken-Florentina-traditional%20(1).webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Chicken-Florentina-Traditional.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Chicken-Florentina-Traditional.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/Chicken-florenting-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/Chicken-florenting-Thin.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Chicken-Florentina-Thin.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/Chicken-Florentina-Thin.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [439, 639, 789, 989],
        },
        cheese: {
          sizes: [35, 40],
          price: [988, 1188],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [639, 789, 989],
        },
      },
    },
    hot: false,
    vegan: false,
  },
  {
    _id: 'id-2',
    name: 'Мясное барбекю',
    description:
      'Мясная пицца с пикантной пепперони, альпийскими колбасками, Моцареллой, луком и соусом Барбекю',
    imageUrl: {
      fat: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/f945f964cd6a8f173ceaa66cc6cb3dbb.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/f945f964cd6a8f173ceaa66cc6cb3dbb.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/64e568f97a17aa5caf0284511cde70a7.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/64e568f97a17aa5caf0284511cde70a7.webp',
        },
      },
      slim: {
        crop: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/full/2a435906a415a7af7f9942e583459d75.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/full/2a435906a415a7af7f9942e583459d75.webp',
        },
        full: {
          jpg: 'https://api.papajohns.ru/images/catalog/thumbs/cart/0646a4d6da994a4a7aa53f395c9fb81a.jpg',
          webp: 'https://api.papajohns.ru/images/catalog/thumbs/cart/0646a4d6da994a4a7aa53f395c9fb81a.webp',
        },
      },
    },
    types: {
      fat: {
        none: {
          sizes: [23, 30, 35, 40],
          price: [499, 799, 949, 1059],
        },
        cheese: {
          sizes: [30, 35, 40],
          price: [998, 1148, 1258],
        },
        sausage: {
          sizes: [30, 35, 40],
          price: [1018, 1168, 1278],
        },
      },
      slim: {
        none: {
          sizes: [30, 35, 40],
          price: [799, 949, 1059],
        },
      },
    },
    hot: false,
    vegan: false,
  },
];

export default pizzas;
