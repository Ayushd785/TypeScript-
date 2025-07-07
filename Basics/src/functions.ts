function greet(firstname: string) {
  console.log("hello " + firstname);
}

greet("ayush");

function sum(a: number, b: number): number {
  return a + b;
}
const ans = sum(3, 4);
console.log(ans);

function isleagal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

const data = isleagal(19);
if (data) {
  console.log("you are legal");
} else {
  console.log("not legal");
}
