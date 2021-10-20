import groupDigits from './group-digits';
import roundHalf from './round-half';
import pluralize from './pluralize';
import addUniqueIdToArrayOfObject from './add-unique-id-to-array-of-items';
import lodash from 'lodash';

describe('Helpers', () => {
  describe('groupDigits', () => {
    it('Добавляются отступы между группами чисел', () => {
      expect(groupDigits(1234)).toEqual('1 234');
      expect(groupDigits(12000)).toEqual('12 000');
      expect(groupDigits(18000000)).toEqual('18 000 000');
    });
  });

  describe('roundHalf', () => {
    it('Округление происходит корректно', () => {
      expect(roundHalf(3.2)).toEqual(3);
      expect(roundHalf(3.3)).toEqual(3.5);
      expect(roundHalf(3.5)).toEqual(3.5);
      expect(roundHalf(3.7)).toEqual(3.5);
      expect(roundHalf(3.8)).toEqual(4);
      expect(roundHalf(4)).toEqual(4);
    });
  });

  describe('pluralize', () => {
    it('Склонение происходит корректно', () => {
      expect(pluralize(1, 'стакан', 'стакана', 'стаканов')).toEqual('стакан');
      expect(pluralize(2, 'стакан', 'стакана', 'стаканов')).toEqual('стакана');
      expect(pluralize(5, 'стакан', 'стакана', 'стаканов')).toEqual('стаканов');
      expect(pluralize(21, 'стакан', 'стакана', 'стаканов')).toEqual('стакан');
      expect(pluralize(22, 'стакан', 'стакана', 'стаканов')).toEqual('стакана');
      expect(pluralize(25, 'стакан', 'стакана', 'стаканов')).toEqual('стаканов');
    });
  });

  describe('addUniqueIdToArrayOfObject', () => {
    beforeEach(() => {
      jest.spyOn(lodash, 'uniqueId').mockReturnValue('42');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    const defaultArr = [
      {
        label: 'Апельсин',
        value: 'orange',
      },
      {
        label: 'Вишня',
        value: 'cherry',
      },
      {
        label: 'Клубника',
        value: 'strawberry',
      },
    ];

    it('Добавление id происходит корректно', () => {
      const expectedArrWithId = [
        {
          id: '42',
          label: 'Апельсин',
          value: 'orange',
        },
        {
          id: '42',
          label: 'Вишня',
          value: 'cherry',
        },
        {
          id: '42',
          label: 'Клубника',
          value: 'strawberry',
        },
      ];

      const arrWithId = addUniqueIdToArrayOfObject(defaultArr);
      expect(arrWithId).toEqual(expectedArrWithId);
    });
  });
});
