/* eslint-disable no-unused-vars */
{
  enum CATEGORIES {
    FRUITS = 'Fruits',
    GREENS = 'Greens',
    DRINKS = 'Drinks',
  }

  interface IProduct {
    name: string;
    price: number;
    quantity: number;
    category: CATEGORIES;
  }

  const getProductsTotalPrice = <T extends IProduct>(
    products: T[],
    category?: CATEGORIES,
  ): number => {
    const totalPrice = products.reduce((result, product) => {
      if (category && product.category === category) {
        result += product.price;
      } else if (!category) {
        result += product.price;
      }
      return result;
    }, 0);
    return totalPrice;
  };

  const products: Array<IProduct> = [
    { name: 'Apple', price: 1.2, quantity: 100, category: CATEGORIES.FRUITS },
    { name: 'Banana', price: 0.8, quantity: 150, category: CATEGORIES.DRINKS },
    { name: 'Orange', price: 1.0, quantity: 120, category: CATEGORIES.GREENS },
  ];

  console.log(getProductsTotalPrice(products));
  console.log(getProductsTotalPrice(products, CATEGORIES.FRUITS));
}
{
  interface IUser {
    id: number;
    username: string;
    email: string;
  }

  interface IAdmin extends IUser {
    role: string;
  }

  const isAdmin = (user: IUser | IAdmin): user is IAdmin => 'role' in user;

  const getOnlyAdmins = (users: (IUser | IAdmin)[]): IAdmin[] =>
    users.filter(isAdmin);

  console.log(
    getOnlyAdmins([
      { id: 1, username: 'user1', email: 'user1@example.com' },
      {
        id: 2,
        username: 'admin1',
        email: 'admin1@example.com',
        role: 'superadmin',
      },
    ]),
  );
}
{
  interface IUser {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const getDataFromApi = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    const body = await response.json();
    return body as T;
  };

  const getDataFromUrlArray = async <T>(urlArray: string[]): Promise<T[]> => {
    const usersBody: T[] = await Promise.all(
      urlArray.map((url) => getDataFromApi<T>(url)),
    );

    console.log(usersBody);
    return usersBody;
  };

  getDataFromUrlArray<IUser>([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/5',
    'https://jsonplaceholder.typicode.com/todos/7',
  ]);
}
{
  interface IEmployee {
    name: string;
    calculateSalary(): number;
    experienceYears: number;
  }

  abstract class Employee implements IEmployee {
    constructor(
      public name: string,
      public experienceYears: number,
    ) {}
    abstract calculateSalary(): number;
  }

  class Manager extends Employee {
    calculateSalary(): number {
      return this.experienceYears * 500;
    }
  }

  class Developer extends Employee {
    calculateSalary(): number {
      return this.experienceYears * 1000;
    }
  }

  class ItTeam {
    private teamMates: Employee[] = [];
    constructor(...employees: Array<Employee>) {
      this.teamMates.push(...employees);
    }
    getTotalTeamSalary() {
      return this.teamMates.reduce(
        (total, teamMate) => teamMate.calculateSalary() + total,
        0,
      );
    }
    addTeamMate(teamMate: Employee) {
      this.teamMates.push(teamMate);
    }
  }

  const team = new ItTeam(new Manager('Alice', 5));
  team.addTeamMate(new Developer('Bob', 3));
  console.log(team.getTotalTeamSalary());
}
