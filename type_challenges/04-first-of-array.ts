// type First<TArray extends any[]> = TArray[0] extends undefined ? never: TArray[0];

type First<TArray extends any[]> = TArray extends [infer TFirst, ...any[]] ? TFirst : never;

type Result = First<[1, 2, 3]>; // 1
type Result2 = First<[() => 123, { a: string }]>; // () => 123
type Result3 = First<[]>; // never
type Result4 = First<[undefined]>; // undefined

// @ts-expect-error
type ResultError = First<'dfsdf'>; // Type 'string' does not satisfy the constraint 'any[]'
