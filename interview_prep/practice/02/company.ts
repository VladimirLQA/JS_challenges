import { Enterprise } from './enterprise.js';

export class Company {
  constructor(private enterprises: Enterprise[] = []) {}

  addEnterprise(name: string) {

  }

  getEnterprise(idOrName: string | number) {

  }

  editEnterprise(enterpriseID: number, entity: string | Enterprise) {

  }

  deleteEnterprise(enterpriseID: number) {

  }

  addDepartment(enterpriseID: number, departmentName: string) {

  }

  editDepartment(departmentID: number, departmentName: string) {

  }

  deleteDepartment(departmentID: number) {

  }

  moveDepartmentEmployeesWithinEnterprise() {

  }



  private findEnterpriseByID(id: number) {
    return this.enterprises.find(({ id }) => id === id);

  }

  private findEnterpriseByName(id: number) {

  }

  private generateNewID() {

  }

  private isEnterpriseNameExist(name: string) {

  }

  private isDepartmentNameExistInEnterprise(name: string) {

  }
}
