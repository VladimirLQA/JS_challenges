/* eslint-disable no-unused-vars */
export {};

type Chainable<O = {}> = {
    option<K extends string, V>(
        key: K, value: V
    ): Chainable<O & { [P in K]: V}>,
    get(): O
};

declare const a: Chainable;

const result = a.option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenge')
  .option('nested', { a: { b: { c: { d: false } } } })
//   .option('foo', 'hello') // will get never in result object
  .get();

const t = result.nested.a.b.c.d;
//    ^?

const t2 = result.foo;
//    ^?
