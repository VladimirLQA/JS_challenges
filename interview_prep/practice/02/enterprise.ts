import { Department } from './types';
import { isEmptyString, isValidID } from './utils.js';

export class Enterprise {
  constructor(
        private id: number,
        private name: string,
        private departments: Department[] = [],
  ) {
    if (isValidID(id)) throw new Error('ID must be positive integer');
    if (isEmptyString(name)) throw new Error('Name cannot be empty');
  }

  addDepartment(id: number, departmentName: string, employeesCount: number) {
    const department = new Department(id, departmentName, employeesCount);
    this.departments.push(department);
  }

  editDepartment(
    departmentID: number,
    departmentInfo: Pick<Department, 'name' | 'employees_count'>,
  ) {

  }

  deleteDepartment(departmentID: number) {

  }



}
