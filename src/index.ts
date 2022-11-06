console.log(Math.floor(55.334));

// Type Annotation

let num: string;
num = "lol";

let wow = 4;

let all: any = "Elzero";
all = 100;

const nimo = "Oazo";

function add(n1: number, n2: string) {
   return n1 + n2;
}
console.log(add(1, "3"));

// Type Annotation with Arrays

let test1: string | number | boolean;

test1 = "A";
test1 = 11;
test1 = true;

let myFriends: string[] = ["Osama", "Ahmed", "Btngan"];

for (let i = 0; i < myFriends.length; i++) {
   console.log(myFriends[i].repeat(3));
}

const arrayOne: number[] = [1, 2, 3, 4];
const arrayTwo: string[] = ["A", "b", "C"];
const arrayThree: (string | number)[] = [5, 6, 7, "D", "z", "h"];
const arrayFour: (number | string | (string | boolean)[])[] = [
   4,
   8,
   3,
   6,
   7,
   "A",
   ["i", " e", " t"],
   [true, false],
];

// Type Annotation for functions

let showMsg = true;
function showDetails(name: string, age: number, salary: number): string {
   let test2 = 8;
   if (showMsg) {
      return `Hi ${name}, Your ${age} year old, Salary is ${salary} Test result =${test2}`;
   }
   return `No Data`;
}
console.log(showDetails("Yyvanii", 94, 4000));

// Functions optional Parameters
// optional parameter can never proceed default one

function showCase(name: string, age: number, country?: string) {
   return `${name}- ${age}- ${country}`;
}
console.log(showCase("Osama", 49));

// rest parameter

function addAll(...numb: number[]): number {
   let sum: number = 0;
   for (let i = 0; i < numb.length; i++) {
      sum += numb[i];
   }
   // numb.forEach((num) => (sum += num));
   return sum;
}
console.log(addAll(3, 100, 99.3, 5, 12.7));

// rest example 2
function printInConsole(...kol: any[]) {
   for (let i = 0; i < kol.length; i++) {
      console.log(`The Value Is ${kol[i]} And Type Is ${typeof kol[i]}`);
   }
   return "done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Type Alias

type st = string;
let test3: st = "Elzero";

type numORst = string | number;
let test4: numORst = 10;
test4 = "Osama";
// test4 = false;

// type alias with objects
type Buttons = {
   up: string;
   right: string;
   down: string;
   left: string;
};
type Last = Buttons & {
   x: boolean;
};
function getActions(btns: Last) {
   console.log(`Action for button up is ${btns.up}`);
   console.log(`Action for button right is ${btns.right}`);
   console.log(`Action for button down is ${btns.down}`);
   console.log(`Action for button left is ${btns.left}`);
   console.log(`Action for button X is ${btns.x}`);
}

getActions({ up: "upp", right: "rite", down: "dwn", left: "lft", x: true });

// Type Literal
type numos = 0 | 1 | -1;
function compare(num1: number, num2: number): numos {
   if (num1 === num2) {
      return 0;
   } else if (num1 > num2) {
      return 1;
   } else {
      return -1;
   }
}
console.log(compare(10, 10));
console.log(compare(10, 8));
console.log(compare(10, 12));

// Tuple
let article: readonly [number, string, boolean] = [10, "titleOne", false];
// article.push(12);
console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);

// Void & Never
function logging(mg: string): void {
   console.log(mg);
   return;
}
console.log(logging("Iam a Massage"));

const fail = (msg: string) => {
   //never function
   throw new Error(msg);
};

// enums [Enumerations]
const kids = 15;
const easy = 9;
const medium = 6;
const hard = 3;
enum level {
   kids = 15,
   easy = 9,
   medium = 6,
   hard = 3,
}
let lvl: string = "easy";
if (lvl === "easy") {
   console.log(`Level is ${lvl}, Time left is ${level.easy}`);
}

function getSec(): number {
   return 3;
}
enum children {
   five = 25,
   seven = 20,
   ten = 15,
}
enum diff {
   kid = children.five,
   easy = 8,
   medium = easy - 2,
   hard = getSec(),
}
lvl = "medium";
if (lvl === "easy") {
   console.log(`Level is ${lvl}, Time left is ${level.easy}`);
}

// Type Assertion -> stops checks after <as>

// // let myImg = document.getElementById("img") as HTMLImageElement;
// let myImg = <HTMLImageElement>document.getElementById("img");
// console.log(myImg.src);

// Union |    intersection &
type A = {
   one: string;
   two: number;
};
type C = {
   three: boolean;
};
type mix = A & C;
function getActioons(btn: mix) {
   console.log(`Hello ${btn.one}`);
   console.log(`Hello ${btn.two}`);
   console.log(`Hello ${btn.three}`);
}
getActioons({ one: "string", two: 10, three: true });

// Type annotation Object

let obj: {
   readonly user: string;
   id: number;
   hire: boolean;
   skills: {
      one: string;
      two: string;
   };
} = {
   user: "Osama",
   id: 100,
   hire: true,
   skills: {
      one: "HTML",
      two: "css",
   },
};
// obj.user = "Elzero"
obj.id = 101;
obj.hire = false;

console.log(obj.id);
console.log(obj.skills.two);

// interface Declaration
interface User {
   id?: number;
   username: string;
   country: string;
}
let user: User = {
   id: 111,
   username: "Osama",
   country: "Turkey",
};
function getData(data: User) {
   console.log(`Id is ${data.id}`);
   console.log(`User is ${data.username}`);
   console.log(`Country is ${data.country}`);
}
getData(user);

// Interface Methods
interface test5 {
   id?: number;
   username: string;
   country: string;
   sayHi(): string;
   sayWelcome: () => string;
   getDouble(n: number): number;
}
let test6: test5 = {
   id: 111,
   username: "Osama",
   country: "Turkey",
   sayHi() {
      return `hi ${this.username}`;
   },
   sayWelcome: () => `welcome`,
   getDouble(n) {
      return n * 2;
   },
};
console.log(test6.getDouble(54));
console.log(test6.sayHi());
console.log(test6.sayWelcome());

// Interface reopen
interface settings {
   theme: boolean;
   font: string;
}
interface settings {
   sidebar: boolean;
}
interface settings {
   external?: boolean;
}
let userSettings: settings = {
   theme: true,
   font: "serif",
   sidebar: false,
};

// Interface Extend
interface test7 extends User {
   protect: boolean;
}
let admin: test7 = {
   id: 222,
   username: "elzero",
   country: "eg",
   protect: true,
};
console.log(admin);

// Class Type Annotation
class User {
   u: string;
   s: number;
   m: () => string;
   constructor(user: string, salary: number) {
      this.u = user;
      this.s = salary;
      this.m = () => `Hello`;
   }
   sayMsg() {
      return `Message`;
   }
}
let newUser = new User("Zero", 3030);
console.log(newUser.u);
console.log(newUser.s);
console.log(newUser.m());
console.log(newUser.sayMsg());

// Class Get & Set

class User2 {
   m: () => string;
   constructor(private _user: string, protected salary: number) {
      this.m = () => `Hello ${this.user}`;
   }
   sayMsg() {
      return `Message`;
   }

   get user(): string {
      return this._user;
   }
   set user(value: string) {
      this._user = value;
   }
}
let user3 = new User2("sljf", 98352);
console.log(user3.m());
console.log(user3.user);
// console.log(user3.salary);
console.log(user3.sayMsg());
user3.user = "Changed";
console.log(user3.user);

// Class Static Members

class User4 {
   private static created: number = 0;
   static getCount(): void {
      console.log(`${this.created} Objects created.`);
   }
   constructor(private _username2: string) {
      User4.created++;
   }
}
let u1 = new User4("Elzero");
let u2 = new User4("Web");
let u3 = new User4("School");
console.log(User4.created);
User4.getCount();

// Class implements interface
interface admin2 {
   theme: boolean;
   font?: "string";
   save(): void;
}
class User5 implements admin2 {
   constructor(public user: string, public theme: boolean) {}
   save(): void {
      console.log(`Saved`);
   }
   update(): void {
      console.log(`updated`);
   }
}
let user6 = new User5("Elzero", true);
console.log(user6.theme);
console.log(user6.user);
user6.save();
user6.update();