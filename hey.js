let a, b;
a = 29;
b = a + 60;
document.getElementById('dum').textContent = b;

document.getElementById('drum').innerHTML = "Hello Dolly";

let mother, father , son, daughter;
mother = 40;
father = 46;
son = mother - 15;
daughter = son - 3;
document.getElementById('age').innerHTML = "The age of the son is " + son;

let car, train, boat, Aircraft;
car = 50;
train = 60;
boat = 30;
Aircraft = car + boat;
document.getElementById('air').innerHTML = "5" + Aircraft;

window.alert('javascript Running');

const cars = ["Toyota", "Saab", "Audi", "Tesla", "Byd"];
cars[1] = "Honda";
cars.push('Lexus');
document.getElementById("gg").innerHTML = cars;

const vehicle = {type:"Lexus", model:"Es350", color:"red"};
vehicle.color = "white";
vehicle.owner = "Johnson";
document.getElementById('veh').innerHTML = "The car owner of The" + " " + vehicle.color + " " + vehicle.type + " " + vehicle.model + " " + "is" + " " + vehicle.owner;

let x = 50;
document.getElementById('boo').innerHTML = (x < 60);

let text1 = "John";
text2 = "Doe";
text3 = text1 + " " + text2;
document.getElementById("tst").innerHTML = text3;

let p = 30;
p += 10;
document.getElementById("vl").innerHTML = p;

let r = 20;
let s = 45;
let q = 32;
document.getElementById("rsq").innerHTML = (r < 30 && s > 50) + "<br>" + (r < 30 && s < 50);

let c = 20;
let d = 45;
let e = 32;
document.getElementById("cde").innerHTML = (c < 25 || d > 50);

let u = 20;
let v = 45;
let w = 32;
document.getElementById("uvw").innerHTML = !(u > 25);

let g = 20;
let h = 45;
let f = 32;
document.getElementById("ghf").innerHTML = (g ** 2);

let i = true;
j = i &&= 20;
document.getElementById("ij").innerHTML = j;

let k = 20;
m = k &&= 50;
document.getElementById("km").innerHTML = m; 

let kj = undefined;
let o = kj &&= 30;
document.getElementById("ko").innerHTML = o;

let bike = 30;
let jet = 250;
let chopper = 135;
let ship = 0;
if (jet > (bike + chopper)) {
    ship = 2000;
}
(ship);

let f15 = "12345";
let min = Math.min(...f15);
let max = Math.max(...f15);
document.getElementById("f16").innerHTML = "The Minimum nuber is" + " " + min + "<br>The Maximum Number is" + " " + max;

let test1 = 20;
let test2 = 10;
let result = test1 < test2;
document.getElementById("f17").innerHTML = "Is A less than B?:" + " " + result;

function myFunctions() {
    let voteable;
    let ages = Number(document.getElementById("ages").value);
    if (isNaN(ages)) {
        voteable = "Input is not a number";
    } else{
        voteable = (ages < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("ags").innerHTML = voteable + " to vote";
}

function convertTemperature() {
    let weather;
    let celsius = Number(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
        weather = "No input";
    } else{
        weather = (celsius > 85) ? "It's Hot Outside" : "The weather is Nice Today";
    }
    document.getElementById("temp").innerHTML = weather;
}

function driveCheck() {
   let old;
   let text = Number(document.getElementById("text").value);
   if (isNaN(text)) {
      old = "No Input";
   } else {
      old = (text < 19) ? "You can't drive" : "You can drive";
   }
   document.getElementById("od").innerHTML = old;
}

const hour = new Date().getHours();
let greeting;
if (hour < 18) {
    greeting = "Good Mornig";
} else {
    greeting = "Good Afternoon";
}
window.alert(greeting);

let seed;
if (Math.random() < 0.5) {
    seed = "<a href='https://w3schools.com'>Visit W3schools</a>";
} else {
    seed = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("sed").innerHTML = seed;

function myCoupon() {
  let member;
  let coupon = Number(document.getElementById("coupon").value);
  if (isNaN(coupon)) {
     member = null;
  } else {
    
  }
}