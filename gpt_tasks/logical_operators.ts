/*
* Task 1: Discount Eligibility
* Create a function isDiscountEligible(cartTotal, isPremiumMember) that returns true
* if the user is eligible for a discount, otherwise returns false.
* Eligibility criteria: If cartTotal is greater than or equal to $50, or if the user is a premium member.*/

/**
 * Discount Eligibility
 * @param cartTotal number
 * @param isPremiumMember boolean
 * @return boolean
 */

const isDiscountEligible =
  (cartTotal: number, isPremiumMember: boolean): boolean =>
    cartTotal >= 50 || isPremiumMember;


console.log(isDiscountEligible(40, false));
console.log(isDiscountEligible(50, false));
console.log(isDiscountEligible(40, true));
console.log(isDiscountEligible(55, true));

console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>`);

/*
* Task 3: Event Registration
* Create a function isEventEligible(age, isTeenEvent) that returns true
* if the user is eligible for the event, otherwise returns false.
* For adult events, the user must be 18 years or older.
* For teen events, the user must be between 13 and 17 years (inclusive).*/

/**
 * Event Registration
 * @param age number
 * @param isTeenEvent boolean
 * @return boolean
 *
 */

function isEventEligible(age: number, isTeenEvent: boolean): boolean {
  if (age < 13) return false;
  if (age >= 18 && !isTeenEvent) return true;
  return age >= 13 && age <= 17 && isTeenEvent;
}

/*
* Task 3: Access Control System
* Create a function hasAccess(userAccess, requiredAccess, isAreaSecure) that returns true
* if the user has access to the area, otherwise returns false.
* userAccess can be "regular", "supervisor", or "administrator".
* requiredAccess can be "regular", "supervisor", or "administrator".
* If the area is not secure (isAreaSecure is false), any user can access it regardless of their access level.
* If the area is secure (isAreaSecure is true), users can access it if their access level is equal to
* or higher than the required access level.*/

/**
 * Access Control System
 * @param userAccess Access
 * @param requiredAccess Access
 * @param isAreaSecure boolean
 * @return boolean
 */

type Access = 'regular' | 'supervisor' | 'administrator';

const hasAccess =
  (userAccess: Access, requiredAccess: Access, isAreaSecure: boolean):
    boolean => {
    if (!isAreaSecure) {
      return false;
    } else {
      const access = ['regular', 'supervisor', 'administrator'];
      const userAccessLevel = access.findIndex((value) => value === userAccess);
      const requiredAccessLevel =
        access.findIndex((value) => value === userAccess);
      if (userAccessLevel === -1 || requiredAccessLevel === -1) {
        throw new Error('You don\'t have the needed access');
      }
      return userAccessLevel >= requiredAccessLevel;
    }
  };

console.log(hasAccess('regular', 'supervisor', true));
console.log(hasAccess('administrator', 'supervisor', true));
console.log(hasAccess('regular', 'administrator', false));

console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);

/*
* Task 4: Vacation Approval System
* Create a function isVacationApproved(requestingEmployee, isManager, vacationDays, teamSize)
* that returns true if the vacation request is approved, otherwise returns false.
* requestingEmployee is the name of the employee requesting the vacation.
* If the employee is a manager (isManager is true), their request is automatically approved.
* If the team size (teamSize) is greater than 5, then the vacation request is denied
* if the requested vacation days (vacationDays) are greater than 10.
* If the team size is 5 or fewer, the vacation request is approved if the requested vacation days are 5 or fewer.*/

/**
 * Vacation Approval System
 * @param requestingEmployee string
 * @param isManager boolean
 * @param vacationDays number
 * @param teamSize number
 * @return boolean
 */

const isVacationApproved =
  (requestingEmployee: string, isManager: boolean,
    vacationDays: number, teamSize: number):
    // eslint-disable-next-line consistent-return
    boolean => {
    if (!requestingEmployee) throw new Error('Name was not provided');
    if (isManager) return true;
    if (teamSize > 5 && vacationDays > 10) {
      return false;
    } else if (teamSize <= 5 && vacationDays <= 5) {
      return true;
    }
  };
