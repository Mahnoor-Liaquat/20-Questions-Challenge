// Qno3 Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.

let products = [
  {
    productName: "Pencil",
    price: 10,
  },
  {
    productName: "Ink Pen",
    price: 200,
  },
  {
    productName: "Pencil Box",
    price: 500,
  },
  {
    productName: "Gel Pen",
    price: 100,
  },
  {
    productName: "Ball Pen",
    price: 20,
  },
];
 let decOrder = products.sort((a,b) => b.price - a.price);
 console.log(decOrder);
