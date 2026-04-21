// const arr = [1,2,3,[4,6,5],8,4,3,[7,9,6,[1,6,7,9]]]
// const an = arr.flat(Infinity)
// console.log(an);

// console.log(Array.isArray("vikas"))
// console.log(Array.from("vikas"));
// console.log(Array.from({name:"vikas"}))

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));


// Object literals

const mySym = Symbol("key1")

const User = {
    name: "vikas",
    "full name": "vikas kushwaha",
    [mySym]: "myKey1",
    age: 25,
    email: "vikasgoogle@gmail.com",
    isLoggedId: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(User.email);
console.log(User["email"]);
console.log(User["full name"]);
console.log(User[mySym]);

// Object.freeze(User);
User.email = "vikasgoogle@gmail.com"
console.log(User);

User.greeting = function(){
    console.log("hello Js user");

}
console.log(User.greeting());