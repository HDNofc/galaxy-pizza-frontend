const pizza = {
  _id: 'test-id-1',
  name: 'Большая бонанза',
  description:
    'Оригинальная пицца с говядиной, ароматной ветчиной, двойной порцией хрустящего бекона, соусом "Барбекю", Моцареллой, мягким молодым сыром, томатами, жгучим перцем "Халапеньо"и луком',
  imageUrl: {
    fat: {
      crop: {
        jpg: 'test-fat-crop-image.jpg',
        webp: 'test-fat-crop-image.webp',
      },
      full: {
        jpg: 'test-fat-full-image.jpg',
        webp: 'test-fat-full-image.webp',
      },
    },
    slim: {
      crop: {
        jpg: 'test-slim-crop-image.jpg',
        webp: 'test-slim-crop-image.webp',
      },
      full: {
        jpg: 'test-slim-full-image.jpg',
        webp: 'test-slim-full-image.webp',
      },
    },
  },
  types: {
    fat: {
      none: {
        sizes: [23, 30, 35, 40],
        price: [459, 669, 809, 999],
      },
      cheese: {
        sizes: [30, 35, 40],
        price: [868, 1008, 1198],
      },
      sausage: {
        sizes: [30, 35, 40],
        price: [888, 1028, 1218],
      },
    },
    slim: {
      none: {
        sizes: [30, 35, 40],
        price: [669, 809, 999],
      },
    },
  },

  hot: true,
  vegan: false,
};

export default pizza;
