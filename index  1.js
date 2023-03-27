let data1 = true
let data2 = "1.25"
//console.log(data1,typeof data1)
//console.log(data2,typeof data2)                 //practicing to console using few data types

let data3 =data1.toString() + data2
//console.log(data3, typeof data3)


//Array
let data = ["one",2,true]                    //example of array of one object
//console.log(data[1],typeof data[1])

//object
let user ={
    name:"soo",                         //consider as one object here 
    faculty:"fkekk",
    phone : "123456",
    email :"soo@uutem.edu.my"
}
//console.log (user.faculty)

 user ={
    name:"soo",                         //array in object with index 
    faculty:"fkekk",
    phone : [ "123456", //index 0
              "654321"   //index 1
            ],
    email :"soo@uutem.edu.my"

 }
 console.log(user.phone[0])

 user ={
    name:"soo",                         //object with many elements
    faculty:"fkekk",
    phone : {
        office : "123456",
        mobile : "456789"
    } ,
            
    email :"soo@uutem.edu.my"

 }
 console.log(user.phone.mobile)
 console.log(user.phone.home)    //not included but stated undefined at console

