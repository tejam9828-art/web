// function add()
// //  {
//     let a = 10;
//     let b = 20;
//     let c = a+b;
//   document.write(c);
// }
// add()
// add()
// add()
// // / Function with parameter passing//
// function sub(a,b)
// {
//     document.write(a-b);
// }
// sub(10,20);
// 1. Named function
function cse()
{
    document.write("this class is very good");
}
cse();

// 2.ananamous function:

let x=function()
{
    document.write("the above  statement is false"); 
}
x();

// 3.arrow function
 let y=()=>
 {
     document.write("no no the above statement is true");
 }
 y();

//  4.iife

(function()
{
     document.write("no it is false");
})();

// nested function

function enterpassword()
{
     document.write("the password entered");
     withdraw();
     function withdraw()
     {
         document.write("withdraw success");
     }
}
enterpassword();



