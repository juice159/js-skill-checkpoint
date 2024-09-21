// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
  let inStockProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].quantity > 0){
      inStockProducts.push(products[i]);
    } 
  }
return inStockProducts
  
}

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
