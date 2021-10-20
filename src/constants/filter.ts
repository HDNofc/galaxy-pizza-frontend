import setUniqueIdToArrayOfObject from 'helpers/add-unique-id-to-array-of-items';

const filters = [
  {
    to: '/',
    text: 'Все',
  },
  {
    to: '/taste/hot',
    text: 'Острая',
  },
  {
    to: '/taste/vegan',
    text: 'Вегетарианская',
  },
  {
    to: '/taste/cheese',
    text: 'Сырный бортик',
  },
  {
    to: '/taste/sausage',
    text: 'Колбасный бортик',
  },
];

const filtersWithId = setUniqueIdToArrayOfObject(filters, 'filter-');

export default filtersWithId;
