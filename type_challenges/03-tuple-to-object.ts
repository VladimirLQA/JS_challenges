type TupleToObject<TTuple extends readonly PropertyKey[]> = {
  [TIndex in TTuple[number]]: TIndex;
};

const tuple = ['tesla', 'model 2', 'model X', 'model Y'] as const;

type TeslaModels = TupleToObject<typeof tuple>;
//    ^?
