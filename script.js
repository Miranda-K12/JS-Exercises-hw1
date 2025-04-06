/*Task 1
1.შექმენით ცვლადი user და შეინახეთ მნიშვნელობა ‘admin’ , შექმენით ცვლადი
passCode და შეინახეთ მნიშვნელობა-12345.
გამოიყენეთ prompt მეთოდი და მომხარებელსაც ჩააწერინეთ user და passCode.
თუ მომხმარებლის მიერ ჩაწერილი user და passCode დაემთხვევა, წინასწარ შენახულ
ინფორმაციას, კონსოლში დაბეჭდეთ"Login successful. Welcome!"
თუ, რომელიმე არ დაემთხვევა დაბეჭდეთ შესაბამისი მესიჯი : Incorrect username ან
Incorrect password
სხვა შემთხვევაში, დაბეჭდეთ Login failed. Please try again.
*/
/*
let user = 'admin';
let passCode = 12345;
//const EnteredUser = prompt('Enter your User');
//const enteredPassword = Number(prompt('Enter Your Password'));
if (EnteredUser === user && enteredPassword === passCode) {
  console.log('Login successful. Welcome!');
} else if (EnteredUser !== user) {
  console.log('Incorrect username');
} else if (enteredPassword !== passCode) {
  console.log('Incorrect password');
} else {
  console.log('Login failed. Please try again.');
}
  */
/*Task 2
შეამოწმეთ სტრიქონი არის თუ არა პალინდრომი. ( პალინდრომი არის ისეთი ტიპის
მონაცემი,
რომელიც ერთნაირად იკითხება მარცხნიდან და მარჯვნიდან, მაგ LEVEL, ANNA, ALLO)
შექმენით ცვლადი და მიანიჭეთ სტრიქონი, რომლის შემოწმებაც გსურთ.
სტრიქონზე იმოქმედეთ ToLowerCase() მაგ: str. ToLowerCase()
გამოიყენეთ for ციკლი და შეადარეთ ერთმანეთს სიმბოლოები ინდექსის ნომრის
მიხედვით,
სტრიქონის თავში და ბოლოში. თუ თანმიმდევრულად ყველა მათგანი დაემთხვევა
გამოიტანეთ
მესიჯი კონსოლში, რომ ინფუთი არის პალიდრომი. თუ არ დაემთხვევა, გამოიტანეთ,
რომ ინფუთი
არ არის პალინდრომი. 
*/

let string = 'Javascript';
string = string.toLowerCase();

let isPalindrome = true;
for (let i = 0; i < string.length / 2; i++) {
  if (string[i] !== string[string.length - 1 - i]) {
    isPalindrome = false;  
    break;
  }
}

if (isPalindrome) {
  console.log("სტრიქონი არის პალინდრომი.");
} else {
  console.log("სტრიქონი არ არის პალინდრომი.");
}
/*Task 3 
გამოიყენეთ მასივის მეთოდი, რომელეც მოცემულ მასივის ანბანის ასოების
თანმიმდევრობით დააწყობს:

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
*/
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();
console.log(fruits);

/*Task 4
არის ტანვარჯიშის ორი გუნდი: დელფინები და კოალები
თითოეული გუნდი სამჯერ ასპარეზობს და მათი შედეგი გამოითვლება საშუალო
არითმეტიკულით.
გუნდი მოიგებს მხოლოდ იმ შემთხვევაში, თუ ორჯერ მეტი საშუალო ქულა ექნება
მეორე გუნდთან
შედარებით, სხვა შემთხვევაში არცერთი გუნდი არ იქნება მოგებული!
*/

/*1.1 შექმენი arrow ფუნქცია სახელად calcAverage და გამოითვალე 3 ასპარეზობის
საშუალო
არითმეტიკული . ამ ფუნქციას უნდა ჰქონდეს სამი პარამეტრი და უნდა დააბრუნოს
ერთი
რიცხვი(საშუალო
არითმეტიკული).*/
let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
}

/*1.2 შექმენი ორი ცვლადი scoreDolphins და scoreKoalas, ამ ცვლადებს მიანიჭე
მნიშვნელობად
ფუნქცია*/
let scoreDolphins = [44, 23, 71];
let scoreKoalas= [65, 54, 49];

let avgDolphins = Math.round(calcAverage(scoreDolphins[0], scoreDolphins[1], scoreDolphins[2]));
let avgKoalas = Math.round(calcAverage(scoreKoalas[0], scoreKoalas[1], scoreKoalas[2]));
console.log(avgDolphins);
console.log(avgKoalas);



let scoreDolphins2 = [85, 54, 41];
let scoreKoalas2 = [23, 34, 27];

let avgDolphins2 = Math.round(calcAverage(scoreDolphins2[0], scoreDolphins2[1], scoreDolphins2[2]));
let avgKoalas2 = Math.round(calcAverage(scoreKoalas2[0], scoreKoalas2[1], scoreKoalas2[2]));
/*1.3 შექმენი ფუნქცია checkWinner, რომელიც იღებს ორ პარამეტრს avgDolphins და
avgKoalas ამ
ფუნქციაში უნდა გაწეროთ ლოგიკა, თუ ერთი გუნდის საშუალო ართმეთმეტიკული
ორჯერ მეტია,
მეორე

გუნდის საშუალო არითმეტიკულზე , გუნდი მოგებულია, თუ არცერთი არ აკმაყოფილებს
ამ პირობას,
ვერცერთი გუნდი ვერ მოიგებს. თუ რომელიმე გუნდმა მოიგო, დაბეჭდეთ ეს ტექსტი:
Koalas win (30 vs. 13), თუ ვერცერთმა მოიგო No team wins...
*/

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log("Dolphins win");
  }
     else if(avgKoalas > 2 * avgDolphins) {
      console.log("Koalas win");
    } else {
      console.log("No team wins");
    }
}
checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avgKoalas2);