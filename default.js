function add(num1,num2){
    return num1+num2;
}

const total = add(15,15);
console.log(total);

function createUser(name, age = 18){
    
    const user = {};
    
    user.name = name;
    
    user.age = age;
    
    return user;
    
}

const firstName = "Justine"
const lastName = "Timberlake"
const fullName = firstName + lastName + "is a good boy"
    
const doubleIt = num => num*2;
const result = doubleIt(50)
console.log(result);

const add2 = (x,y) => x+y;
const result2 = add(15,15);
console.log(result2);