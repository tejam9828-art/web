// / primitive data types:

let a=10.7;
document.write(typeof(a));

let b=`4`;
document.write("<br>");
document.write(typeof(b));

let c=true;
document.write("<br>");
document.write(typeof(c));

let d;
document.write("<br>");
document.write(d);

let e=null;
document.write("<br>");
document.write(typeof(e));

let f=13243084933895838358385673n;
document.write("<br>");
document.write(typeof(f));

let g="hello";
let h="hello";
document.write("<br>");
document.write(Symbol("g")==Symbol("h"));


// non-primitive data types:
let i=10.908;
document.write("<br>");
document.write(Math.sqrt(i));
document.write("<br>");
document.write(Math.max(10,20,30,40,50));
document.write("<br>");
document.write(Math.trunc(i));

// date object:

let v=new Date();
document.write("<br>");
document.write(v);
document.write("<br>");
document.write(v.getFullYear());
document.write("<br>");
document.write(v.getMonth());


// time:
let k=v.getMilliseconds();
document.write("<br>");
document.write(k);
