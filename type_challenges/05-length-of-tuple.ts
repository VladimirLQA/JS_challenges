type Length<TTuple extends readonly any[]> = TTuple['length'];

type NTypeof = (typeof tesla)['values']; // we have all the possible methods for an array

const tesla = ['tesla', 'model 3', 'model X'] as const;

type Result = Length<typeof tesla>; // 3

const spaceX = ['Falcon 9', 'Falcon heavy', 'dragon']; // without 'as const'

type Result2 = Length<typeof spaceX>; // number
