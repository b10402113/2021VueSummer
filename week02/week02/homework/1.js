// 第一題
// console.log(a,b,c);
// var a = 12,b=13,c=14;
// function fn(a){
//     console.log(a,b,c);
//     a = 100;
//     c = 200;
//     console.log(a,b,c);
// }
// b = fn(100);
// console.log(a,b,c);

// 第二題
// var i = 0;
// function A(){
//     var i = 10;
//     function x() {
//         console.log(i);
//     }
//     return x;
// }
// var y = A();
// y();
// function B(){
//     var i = 20;
//     y();
// }
// B();

// 第三題
// var a=1;
// var obj ={
//    name:"tom"
// }
// function fn(){
//    var a2 = a;
//    obj2 = obj;
//    a2 =a;
//    obj2.name ="jack";
// }
// fn();
// console.log(a);
// console.log(obj);

// 第四題
// var a = 1;
// function fn(a){
//     console.log(a)
//     var a = 2;
//     function a(){}
// }
// fn(a);

// 第五題
// console.log(a); 
// var a=12; 
// function fn(){
//     console.log(a); 
//     var a=13;   
// }
// fn();   
// console.log(a);

// ----

// console.log(a); 
// var a=12;
// function fn(){
//     console.log(a);
//     a=13;
// }
// fn();
// console.log(a);

// // ----

// console.log(a);
// a=12;
// function fn(){
//     console.log(a);
//     a=13;   
// }
// fn();
// console.log(a);

// 第六題
// var foo='hello'; 
// (function(foo){
//    console.log(foo);
//    var foo=foo||'world';
//    console.log(foo);
// })(foo);
// console.log(foo);

//第七題
// {
//     function foo() {}
//     foo = 1;
// }
// console.log(foo);

// ----

// {
//     function foo() {}
//     foo = 1;
//     function foo() {}
// }
// console.log(foo);

// ----

// {
//     function foo() {}
//     foo = 1;
//     function foo() {}
//     foo = 2;
// }
// console.log(foo);