const add = (a,b) =>{
    return a + b;
}

console.log(add(4,4));

const user = {
    name : 'vishnu',
    cities :['raipur','chennai','Little Rock'],

    message(){
       return this.cities.map((city) => this.name + ' has lived in ' + city);    
    }
};
console.log(user.message());


//challenge

const multiplier = {
    numbers : [1,2,3,4],
    multiplyBy: 10,

    newArray(){
        return this.numbers.map((x)=>this.multiplyBy*x);
    }
}

console.log(multiplier.newArray());