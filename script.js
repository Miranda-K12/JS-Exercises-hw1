'use strict';
/*Task 1
შექმენით პროდუქციის კალათა (მასივი), სადაც თითოეული პროდუქტი არის ობიექტი
და შეიცავს შემდეგ ველებს:
const productCart=[{},{},{}]
name – პროდუქტის სახელი
price – პროდუქტის ფასი
quantity – რაოდენობა
შემდეგ, for ციკლის გამოყენებით, გამოთვალეთ კალათის საერთო ღირებულება და
დაბეჭდეთ კონსოლში.
თუ მთლიანი ღირებულება 100₾-ზე მეტია, დაბეჭდეთ:
➡️ "გილოცავთ! თქვენ მიიღეთ უფასო მიტანის სერვისი!"
წინააღმდეგ შემთხვევაში, დაბეჭდეთ:
➡️ "მიტანის სერვისისთვის საჭიროა 100₾-ზე მეტი თანხა".
*/
const productCart = [
  {
    name: "Apple",
    price: 5,
    quantiry: 10,
  },
  {
    name: "Banana",
    price: 2,
    quantiry: 20,
  },
  {
    name: "Orange",
    price: 8,
    quantiry: 4,
  }];
let totalPrice = 0;
for (let i = 0; i < productCart.length; i++){
  totalPrice += productCart[i].price * productCart[i].quantiry;
}
totalPrice > 100 ? console.log("გილოცავთ! თქვენ მიიღეთ უფასო მიტანის სერვისი!")
  : console.log("მიტანის სერვისისთვის საჭიროა 100₾-ზე მეტი თანხა");

  /*Task 2
შექმენით პროდუქტების მასივი, სადაც თითოეული პროდუქტი არის ობიექტი და
შეიცავს შემდეგ ველებს:
name – პროდუქტის სახელი
price – პროდუქტის ფასი
for ციკლის გამოყენებით, იპოვეთ ყველაზე ძვირადღირებული პროდუქტი და
დაბეჭდეთ მისი სახელი და ფასი კონსოლში.
*/
const productList = [
  {
    name: "Mobile",
    price: 500,
  },
  {
    name: "Computer",
    price: 1200,
  },
  {
    name: "Airpod",
    price: 50,
  },
  {
    name: "TV",
    price: 750,
  },
  {
    name: "Smartphone",
    price: 450,
  },
  {
    name: "Oven",
    price: 700,
  },
  {
    name: "Iron",
    price: 75,
  },
  {
    name: "Fan",
    price: 80,
  }
];
let expensiveProduct = productCart[0];
for (let i = 0; i < productList.length; i++) {
  if (productList[i].price > expensiveProduct.price) {
    expensiveProduct = productList[i];
  }
}
console.log(expensiveProduct);

/*Task 3 
შექმენით fruits მასივი. შემდეგ, join() მეთოდის გამოყენებით, ყველა ხილი გადააქციეთ
ერთ სტრიქონად(string), ელემენტები გამოყავით მძიმით და space-ით. დაბეჭდეთ
მიღებული სტრიქონი.
*/
const fruits = ["Apple", "Orange", "Banana", "Mango"];
const fruitsString = fruits.join(",  ");
console.log(fruitsString);

/*Task 4 
შექმენით რიცხვების მასივი და reverse() მეთოდის გამოყენებით შეაბრუნეთ მისი
ელემენტები. alert-ში დაბეჭდეთ შედეგი.
*/
const numArr = [1, 5, 8, 9, 10, 25];
const reversedArr = numArr.reverse();
//alert(reversedArr);
/*Task 5 
შექმენით ორი მასივი nums1 და nums2, concat() მეთოდის გამოყენებით გააერთიანეთ
ისინი ახალ მასივში. დაბეჭდეთ გაერთიანებული მასივი.
*/
let nums1 = [12, 21];
let nums2 = [7, 14];
const newArr = nums1.concat(nums2);
console.log(newArr);
/*Task 6 
შექმენით მასივი, რომელიც შეიცავს რამდენიმე ფერს. შემდეგ, push() მეთოდის
გამოყენებით დაამატეთ ახალი ფერი მასივის ბოლოში და დაბეჭდეთ განახლებული
მასივი.
*/
const colorList = ["red", "yellow", "pink", "blue"];
colorList.push("Brown");
console.log(colorList);

/*შექმენით მასივი, რომელიც შეიცავს რამდენიმე ცხოველს. შემდეგ, pop() მეთოდის
გამოყენებით ამოიღეთ ბოლო ცხოველი მასივიდან. დაბეჭდეთ განახლებული მასივი
და ამოღებული ცხოველი ცალკე.
*/

const animals = ["Fox", "Elephant", "Tiger", "Giraffe"];
console.log(animals.pop());
console.log(animals);