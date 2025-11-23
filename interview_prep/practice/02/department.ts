import { ERRORS } from './errorsCollection.js';
import { isValidID, isEmptyString, isValidEmployeesCount } from './utils.js';

export class Department {
  constructor(
    private id: number,
    private name: string,
    private employees_count: number = 0,
  ) {
    if (isValidID(id)) throw new Error(ERRORS.INVALID_ID);
    if (isEmptyString(name)) throw new Error(ERRORS.EMPTY_NAME);
    if (isValidEmployeesCount(employees_count)) {
      throw new Error(ERRORS.INVALID_EMPLOYEES_COUNT);
    }
  }
}
