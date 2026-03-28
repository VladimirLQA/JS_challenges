/* eslint-disable no-unused-vars */

export type MyRecord<T extends string | number | symbol, K> = {
  [P in T]: K;
};

export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

export type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

export type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

export type MyExclude<UnionT, ToBeExluded> =
    UnionT extends ToBeExluded ? never : UnionT;

export type MyExtract<UnionT, ToBeExtracted> =
    UnionT extends ToBeExtracted ? UnionT : never;

export type MyNonNullable<T> = T extends null | undefined ? never : T;

export type MyParameters<
T extends (...args: any) => any
> = T extends (...args: infer P) => any ? P : never;

export type MyConstructorParameters<
T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;

export type MyReturnType<
T extends (...args: any) => any
> = T extends (...args: any) => infer P ? P : never;

export type MyInstanceType<
T extends new (...args: any) => any
> = T extends new (...args: any) => infer P ? P : never;

export type MyPick<T, K extends keyof T> = {
  [Keys in keyof T as Keys extends K ? Keys : never]: T[Keys]
};

export type MyPickSimple<T, K extends keyof T> = {
  [P in K]: T[P]
};

export type MyOmit<T, K extends keyof T> = {
  [Keys in keyof T as Keys extends K ? never : Keys]: T[Keys]
};

export type MyOmitUsingExclude<T, K extends keyof T> = {
  [Keys in MyExclude<keyof T, K>]: T[Keys]
};

export type MyAwaited<T> =
  T extends Promise<infer U>
    ? MyAwaited<U>
    : T;

export type UppercaseLetter<C extends string> =
  C extends 'a' ? 'A' :
  C extends 'b' ? 'B' :
  C extends 'z' ? 'Z' : C;

export type MyUppercase<S extends string> =
  S extends `${infer F}${infer Rest}`
    ? `${UppercaseLetter<F>}${Rest}`
    : S;

