// let x : number=100;

// console.log(x);

// function demo(firstName : string){
//     console.log("Hii" + firstName)
  
// }

// demo("vaibhav");

// function sum(a : number , b : number) : number{
//     return a+b;
// }

// const value=sum(11 , 28);
// console.log(value);


function runafter1s(fn : ()=>void){
    setTimeout(fn , 1000);
}

runafter1s(function(){
    console.log("HII there")
})