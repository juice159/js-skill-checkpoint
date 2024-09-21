// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200
console.log(inventory.apple)
inventory.orange = { price: 20, quantity: 300 };
console.log(inventory)

let totalInventoryValue = 0
for (let item in inventory) {
  totalInventoryValue = (inventory[item].price * inventory[item].quantity)+totalInventoryValue
}
console.log(`Total inventory value: ${totalInventoryValue} baht`)