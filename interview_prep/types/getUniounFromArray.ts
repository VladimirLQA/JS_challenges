// eslint-disable-next-line no-unused-vars
const arr: number[] = [1, 2, 3];

type UnionFromType<T extends any[]> = T[number];

type Res = UnionFromType<[1, 2, 3]>;


