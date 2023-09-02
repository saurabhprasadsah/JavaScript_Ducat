
function* genratorfunction (a,b,c){
    yield a; 
    yield a+10;
    yield a +30; 
    yield b +30; 
    yield c + 30;  
}
let gen = genratorfunction(10,20,30);
console.log('next',gen.next()); // {value: 10, done: false }
console.log("next",gen.next()); //{ value : undefined ,done : true };
console.log("next",gen.next());
console.log("next",gen.next());
console.log("next",gen.next());

