export const pizza = {
  id: 'id-1',
  name: 'Цыпленок Флорентина',
  description:
    'Сливочно-шпинатный соус, сыр моцарелла, нежная куриная грудка, хрустящий бекон, сочные томаты',
  imageUrl: {
    jpg: 'test-image-url.jpg',
    webp: 'test-image-url.webp',
  },
  doughType: [
    {
      id: 'dough-fat',
      value: 'fat',
      label: 'Традиционное',
      checked: true,
    },
    {
      id: 'dough-slim',
      value: 'slim',
      label: 'Тонкое',
      checked: false,
    },
  ],
  stuffedCrusts: ['none', 'cheese', 'sausage'],
  price: 629,
  selectedCrust: 'none',
  sizes: [
    {
      id: 'size-23',
      value: 23,
      label: 23,
      checked: false,
    },
    {
      id: 'size-30',
      value: 30,
      label: 30,
      checked: true,
    },
    {
      id: 'size-35',
      value: 35,
      label: 35,
      checked: false,
    },
    {
      id: 'size-40',
      value: 40,
      label: 40,
      checked: false,
    },
  ],
  hot: false,
  vegan: false,
  isStuffedCrustAvailable: true,
  onDoughTypeChange: () => {},
  onSizeChange: () => {},
  onStuffedCrustChange: () => {},
  onAddToCartClick: () => {},
};
