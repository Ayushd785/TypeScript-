function maxValue(arr: number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr: number[] = [1, 2, 3, 4];

console.log(maxValue(arr));

interface User {
  firstname: String;
  lastname: String;
  age: number;
}

function filterUser(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

let users: User[] = [
  {
    firstname: "ayush",
    lastname: "Dwivedi",
    age: 11  ,
  },
  {
    firstname: "hello",
    lastname: "world",
    age: 21,
  },
];

let value: User[] = filterUser(users);
console.log(value);
