const coding = ["js","java","python","ruby","cpp"]

const values = coding.forEach((item) =>{
    console.log(item);
    
})
console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newmyNums = myNum.filter((num)=> num > 4)
const newmyNums = myNum.filter((num)=>{
    return num > 4
})
console.log(newmyNums);

