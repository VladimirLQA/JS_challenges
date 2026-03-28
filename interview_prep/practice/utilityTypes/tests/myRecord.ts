/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { MyRecord } from '../utilityTypes';

const b: MyRecord<string, string> = {
  teste: 'stirn',
  342342: 'stirn',
  // @ts-expect-error
  tes: {},
};

const a: MyRecord<number, Function> = {
  dfsdf: () => 'test',
  // @ts-expect-error
  2: 'string',
};

const c: MyRecord<string, number | (() => 'test') | never> = {
  test: 1,
  dream: () => 'test',
  fanta: () => { throw new Error(); },
  // @ts-expect-error
  fail: () => 234234,
};
