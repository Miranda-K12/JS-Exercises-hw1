/*დაწერეთ- 1 პოლიმორფიზმის და 2 მემკვიდრეობითობის მაგალითი. 
ასევე ატვირთეთ კოდი, რომელიც ლექციაზე დავწერეე ენკაფსულაციის საილუსტრაციოდ.
*/

/*ენკაფსულაცია */

class Student {
  fullName;
  course;
  grade;
  constructor(fullName, grade, course) {
    this.fullName = fullName;
    this.grade = grade;
    this.course = course;
  }
  printGrade() {
    console.log(`${this.fullName} got ${this.grade} in the ${this.course}`)
  }
}

const student1 = new Student('Helen Smith', 85, 'Marketing');
const student2=new Student ('John Brown', 75, 'English')
student1.printGrade();
student2.printGrade();

/*პოლიმორფიზმი */
class BankAccount {
  user;
  balance;
  constructor(user, balance) {
    this.user = user;
    this.balance = balance;
  }
  withdraw(amount) {
  if (amount > this.balance) {
    console.log(`${this.user} ანგარიშზე არ არის საკმარისი თანხა`);
  } else {
    this.balance -= amount;
    console.log(`ოპერაცია წარმატებულია. ${this.user} ბალანსი არის: $${this.balance}`);
  }
  }
   getBalance() {
    return this.balance;
  }
}

class Deposit extends BankAccount {
  withdraw(amount) {
    if (amount > this.balance) {
  console.log("ანგარიშზე არ არის საკმარისი თანხა.");
  }
    else {
      this.balance -= amount;
      console.log(`ანაბარზე გადავიდა ${amount} ლარი. ბალანსი: $${this.balance}`);
    }
  }
}

const user1 = new BankAccount("მირანდა", 1000);
user1.withdraw(600);
user1.withdraw(2000);
const user2 = new Deposit("ელენე", 400);
user2.withdraw(500);
user2.withdraw(100);

/*მემკვიდრეობითობა */
class StudentInfo {
  constructor(student, grades) {
    this.student = student;
    this.grades = grades; 
  }

  calculateAverage() {
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    const averageGrade = (total / this.grades.length).toFixed(2);
   if (averageGrade > 90) {
      console.log(`${this.student} მიიღებს წითელ დიპლომს`);
    } else if (averageGrade <= 90 && averageGrade > 50) {
      console.log(`${this.student} მიიღებს დიპლომს`);
    } else {
      console.log(`${this.student} უნდა ჩააბაროს დამატებითი გამოცდა`);
    }
  }
}


class UndergraduateStudent extends StudentInfo {
  constructor(student, grades) {
    super(student, grades); 
    this.numberOfCourses = grades.length;
    console.log(`${this.student} არის ბაკალავრის სტუდენტი. სრული კურსების რაოდენობა: ${this.numberOfCourses}`);
  }

}

const name1 = new StudentInfo("მირანდა", [85, 92, 78, 89, 88, 65]);
name1.calculateAverage();

const name2 = new UndergraduateStudent("ელენე", [80, 92, 98, 100, 96, 89]);
name2.calculateAverage();