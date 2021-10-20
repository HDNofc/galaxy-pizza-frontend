import { uniqueId } from 'lodash';

const addUniqueIdToArrayOfObject = <T>(items: T[], prefix?: string) =>
  items.map((item) => ({
    ...item,
    id: uniqueId(prefix),
  }));

export default addUniqueIdToArrayOfObject;
