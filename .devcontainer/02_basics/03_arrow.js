// const user = {
//     username: "Ram",
//     price: 499,

//     welcomeMessage: function(){
//         console.log(`${this.username} ,welcometo website `);
//         console.log(this);
        
        
//     }
// }
// user.welcomeMessage();
// user.username = "shyam"
// user.welcomeMessage();

// const chai = function () {
//     let username = "vikas"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "vikas"
    console.log(this);
    
}

chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));


const addTwo = (num1 , num2) => (num1 + num2)
console.log(addTwo(3,4));