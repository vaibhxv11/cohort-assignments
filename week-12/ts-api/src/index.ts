// 1.Pick 
// interface User{
//     id :String ;
//     name :string ;
//     age :number ;
//     email : string ;
//     password :string;
// }

// interface UpdateProps{
//     name :string ;
//     age :number ;
//     password :string ;
// }

// type UpdateProps =Pick<User ,'name' | 'age' | 'email'>
// function updateUser(updatedProps :UpdateProps){

// }

//2.Partial : partial makes all properties of a type optional , crateing a typo with the same properties , 
//but each marked as optional 
 
// type UpdatePropsOptional =Partial <UpdateProps>

//it will make update props optional

// 3..    we want object values or array values can not be chaged , you can make them read only 
//ReadONLY

// type User={
//     readonly name :string ;
//     readonly age :number ;



// }

//ypu can write any one of , give object Readonly or , each every property of object readonly

// const user : Readonly <User> ={
//     name :"JOHN" ,
//     age :21
// }

//  user.age=12

// 4................ Record and Maps
//Record :record gives you cleaner type to objects 

// type Users=Record<string ,{ age :number ; name :string }>; 

// const users :Users={
//     "vaibhav11":{age :20 , name :"vd"} ,
//     "vai12":{age :25 , name : "vahbiav"}
// }

/////5.Map
type User={
    name :string ;
    age :number ;
    email :string;
}

 const users=new Map<string , User>()

 users.set("vd" , {name : "vaibhav" , age :20 , email :"vd@gmail.com"})

const user=users.get("vd")
console.log(user);


//   6.Exclude :in a function that can accept several types of inputs but you want to exclude specific types from being passed to it  
