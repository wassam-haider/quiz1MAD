console.log("------------------------------------------------------------------")
console.log("MAD quiz: 1 section 1")


const cart = [
  { name: "Apple", price: 120, quantity: 2 },
  { name: "Banana", price: 60, quantity: 5 },
  { name: "Mango", price: 150, quantity: 3 }
];

const Total = (items) => 
  items.reduce((total, item) => total + item.price * item.quantity, 0);

console.log(Total(cart)); 

cart.forEach(({ name, price, quantity }) => {
  console.log(`Item: ${name} | Total: ${price * quantity}`);
});

const fetchUserData = async () => {
  const Api_ka_mock = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "John", age: 22 });
      }, 2000);
    });

  const user = await Api_ka_mock();
  console.log(`User Loaded: ${user.name}, Age ${user.age}`);
};

fetchUserData();
console.log("------------------------------------------------------------------")
// ye opar wala console user name age se phele load huga due to async
