const myNum = [1, 2, 3, 4, 5]

// const myTotal = myNum.reduce(function(acc,currentValue){
//     console.log(`acc : ${acc} and currentValue: ${currentValue}`);

//     return acc + currentValue
// },0)

const myTotal = myNum.reduce((acc, currentValue) => {
    return acc + currentValue
})
console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 599
    },
    {
        itemName: "java course",
        price: 999
    }, {
        itemName: "python course",
        price: 899
    }, {
        itemName: "react course",
        price: 799
    }, {
        itemName: "c++ course",
        price: 599
    }, {
        itemName: "data course",
        price: 599
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
