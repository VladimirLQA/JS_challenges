import { Handler } from './types';

export const isString = (value: unknown): value is string =>
  typeof value === 'string';

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number';

export const stringify = (value: unknown): string => {
  const handlers: Record<string, Handler> = {
    'string': (value: string) => value,
    'number': (value: number) => String(value),
    'boolean': (value: boolean) => String(value),
    'undefined': () => 'undefined',
    'object': (value: object | null) =>
      value === null ? 'null' : JSON.stringify(value),
  };
  const valueType = typeof value;
  const handler = handlers[valueType] || ((v: unknown) => String(v));

  return handler(value);
};

export const isInteger = (number: number) => Number.isInteger(number);

export const isValidID = (id: number) => id <= 0 && isInteger(id);

export const isValidEmployeesCount = (count: number) =>
  count < 0 && isInteger(count);

export const isEmptyString = (str: string) => !str.trim();

