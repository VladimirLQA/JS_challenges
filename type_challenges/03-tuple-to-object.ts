type TupleToObject<TTuple extends readonly PropertyKey[]> = {
  [TIndex in TTuple[number]]: TIndex;
};

type TupleIndex = (typeof tuple)[number];
//    ^?

const tuple = ['tesla', 'model 2', 'model X', 'model Y'] as const;

type TeslaModels = TupleToObject<typeof tuple>;
//    ^?
