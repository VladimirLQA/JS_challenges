/*
https://www.codewars.com/kata/586e6d4cb98de09e3800014f/javascript
*/
function VendingMachine(items, money) {
  this.items = items;
  this.money = money;
}

VendingMachine.prototype.vend = function(selection, itemMoney) {
  selection = selection.toUpperCase();
  const selectedItem = this.items.find((item) => item.code === selection);
  if (!selectedItem) {
    return `Invalid selection! :` +
    ` Money in vending machine = ${this.money.toFixed(2)}`;
  }

  if (selectedItem.quantity === 0) {
    return `${selectedItem.name}: Out of stock!`;
  }

  if (itemMoney < selectedItem.price) {
    return 'Not enough money!';
  }

  const change = (itemMoney - selectedItem.price).toFixed(2);

  selectedItem.quantity--;

  this.money += selectedItem.price;

  if (change > 0) {
    return `Vending ${selectedItem.name} with ${change} change.`;
  } else {
    return `Vending ${selectedItem.name}`;
  }
};
