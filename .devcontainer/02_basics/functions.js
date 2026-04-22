function sayMyName() {
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("a");
    console.log("s");

}
// sayMyName();

// function addTwoNumberrs(number1,number2){
//     console.log(number1 + number2)
// }

function addTwoNumberrs(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumberrs(3,4);
console.log("result:" , result);


// function loginUserMessage(username = kush){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }



function loginUserMessage(username = "kush"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vikaskushwaha"));
console.log(loginUserMessage("kushwaha"));
