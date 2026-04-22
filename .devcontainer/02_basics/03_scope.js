let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("inner:" , a);
    
}

console.log(a);


function one(){
    const username = "Ram"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()

}
one()