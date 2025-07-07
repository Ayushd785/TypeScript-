interface User {
  firstname: String;
  lastname: String;
  age: number;
}

function isLeagal(user: User) {
  if (user.age < 18) {
    console.log("You are not of legal age");
  } else {
    console.log("You have an legal age");
  }
}

isLeagal({
  firstname: "Ayush",
  lastname: "kumar",
  age: 21,
});
