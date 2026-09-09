document.getElementById("h1").innerHTML = "Hello world Good Day";

let x;
const fname  = "JOHN";
x = 5;
document.getElementById("h2") .innerHTML= fname +" "+ "is" + " " + x + " " + "years old";
const input = document.getElementById('user');
const openBtn = document.getElementById('userB');
const output = document.getElementById('output');
const closeBtn = document.getElementById('close');
const overlay = document.getElementById('userO');

openBtn.addEventListener('click', function() {
    let rawInput = input.value;
    let processedInput = rawInput.trim().toUpperCase();
    let hour = new Date().getHours();
   if (processedInput === "") {
    output.textContent = "Please enter a Name !";
    output.style.color = 'red';
    return;
   }
   overlay.style.display = 'flex';
   if (hour < 12) {
    output.textContent = "Good Morning!" + " " + processedInput;
   } else if (hour < 18) {
    output.textContent = "Good Afternoon!" + " " + processedInput;
   } else {
    output.textContent = "Good Evening!" + " " + processedInput;
   }
});
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    return;
});

const cars = ["Olanike", "Shalom", "Pelumi"];
cars[0] = "Adebayo";
cars.push("John");
document.getElementById("sname") .innerHTML = cars;

const carList = {type:"Toyota", model:"Sienna", year:"2019", color:"red"};
carList.color = "white";
carList.owner = "Pelumi";
document.getElementById("constobj") .innerHTML = "Details of this vehicle includes " + carList.type + " " + carList.model +" " +carList.owner;
document.getElementById("jhn") .innerHTML = 
typeof 2 + "<br>" +
typeof "John" + "<br>" +
typeof "Adebayo Pelumi";

let asn = 8;
asn **= 4;
document.getElementById("asn").innerHTML = asn;
function myFunction() {
    let voteable;
    let age = Number(document.getElementById("ages").value);
    if (isNaN(age)) {
        voteable = "Input your age!";
    }else{
        voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo").innerHTML = voteable + " too vote";
}
let product = document.getElementById("check");
let coupon = document.getElementById('coupon');
let total;
let price = 520;
product.addEventListener('click', () => {
    switch (coupon.value) {
        case "SnoW1":
            total = price * 0.90;
            break;
            case "Srite2":
                total = price * 0.85;
                break;
                case "SnowG":
                    total = price * 0.80;
                    break;
                    case "Rite25":
                        total = price * 0.75;
                        break;
                        case "RiteC":
                            total = price * 0.7;
                            break;
                            case "RiteB":
                                total = price * 0.65;
                                break;
                                default:
                                total = price;
    }
    document.getElementById("total1").innerHTML ="Total: $" + total;
return;
});

const data = ["john", "pelumi", "Adebayo" ];
let y = "";
for (let z = 0; z < data.length; z++) {
    y += data[z] + "<br>";
}
document.getElementById("dd").innerHTML = y;

let text = "";
loop1: for (d1 = 0; d1 < 10; d1++) {
    loop2: for (d2 = 0; d2 < 10; d2++) {
        if (d2 === 4) {break loop2; }
        text += d2 + "<br>";
    }
}
let mybc = data.join("*")
document.getElementById("dc").innerHTML = text + mybc;
let text1 = "";
let truck = ["Howo", "Daf", "Mack", "Man", "Volvo"]
lists: {
    text1 += truck[0] + "<br>";
    text1 += truck[1] + "<br>";
    break lists;
    text1 += truck[2] + "<br>";
    text1 += truck[3] + "<br>";
}
document.getElementById("de").innerHTML = text1 +"<br>"+ truck.at(2);
let text3 = "";
for (let d4 = 0; d4 < 10; d4++) {
    if (d4 === 3) {continue; }
    text3 += d4 * 10 + "<br>";
}
document.getElementById("df").innerHTML = text3;


let ad = "Template Strings";
let tag = ["template strings", "javascrit", "es6"];
let html = `<h2>${ad}</h2><ul>`;
for (const a1 of tag) {
    html += `<li>${a1}</li>`;
}
html += `</ul>`;
document.getElementById('a2').innerHTML = html;

let a5 = "My Name is Adebayo Pelumi John";
let a21 = a5.indexOf("Pelumi");
document.getElementById("a12").innerHTML = a21;

let a6 = "My Name is Pelumi John Adebayo Pelumi";
let a22 = a6.lastIndexOf("Pelumi");
document.getElementById("a13").innerHTML = a22;
let a7 = "My Name is Pelumi John Adebayo the Name of The School I graduated from is Government  Technical college awe oyo oyo state";
let a23 = a7.replace(/Name/g, "birth Name");
document.getElementById("a14").innerHTML = a23;

function sayHello(name) {
    return "Hello " + name ; 
}
let greet = sayHello("John");
document.getElementById("a16").innerHTML = greet;

function multiply(a,b) {
    return a * b;
}
let result = multiply(3,9);
document.getElementById("a17").innerHTML = result;

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let name1 = fullName("Adebayo","Pelumi");
document.getElementById("a18").innerHTML = name1;

function test(x,y =10) {
    return x + y;
}
document.getElementById("a19") .innerHTML = test(7);

function calculate(a11,b12) {
    return a11 * b12;
}
let subTotal = calculate(13,7);
let vat = subTotal * 0.15;
let total2 = subTotal + vat;
document.getElementById("a20") .innerHTML = total2;

setTimeout(callBack,5000);
function callBack() {
    let display = "HEllo world";
    let call1 = display.toUpperCase();
    document.getElementById("a21").innerHTML = call1 + "<br>";
    return;
}

const bed1 = {
    mid: 531,
    small: 479,
    large: 700,
    color:{
        color0: "Black",
        color1: "White",
        color2: "Green",
        color3: "Cream",
 } 
}
let p1 = "color";
let p2 = "color3";
document.getElementById('a22').innerHTML = bed1[p1][p2];
const lp = Object.keys(bed1).filter(key => key !== "color");
let p01 = "";
let p02 = "";
for (let a of lp) {
    p01 += a + "<br>";
    if (p01 === 3) {
        break;
    }
}
for (let [a, b] of Object.entries(bed1.color))  {
    p02 += a + ": " + b + "<br>";
}
document.getElementById('a24').innerHTML = p01 + "<br>" + p02;

function Person(first,last,age,date,eyecolor,state,nationality) {
    this.firstName = first;
    this.lastName = last;
    this.pAge = age;
    this.dob = date;
    this.eyecolor = eyecolor;
    this.state = state;
    this.nationality = nationality;
}
const myPerson = new Person("Pelumi", "Adebayo", 22, "15/09/2003", "Black", "OYO state", "Nigeria");
const mybb = new Person("John", "Olamide", 25, "15/09/2000", "Brown","Lagos state", "English");
mybb.address = "63 Daniel Street Orisumbare Ejigbo Lagos";
Person.prototype.address = "65 Daniel Taiwo";
document.getElementById('a25').innerHTML = "This is my Details " + myPerson.dob + mybc;

let truck2 = JSON.stringify(truck);
let truck3 = truck [truck.length-1];
let tag2 = (tag instanceof Array);
let tag3 = Array.isArray(tag);
document.getElementById("a26").innerHTML = truck2 +"<br>" + truck3 + "<br>" + tag2 + "<br>" + tag3;
let xt = "";
const tb = {
    name: "Adebayo",
    state: "Lagos",
    cars: [
        {name:"Benz", models: ["C300", "C350", "GLK450", "ML350", "ML450", "CLA250", "GLE450", "G63 AMG"]},
        {name: "Toyota", models: ["Supra300", "Venza", "Camry", "Hilux", "Highlander", "Corolla"]},
        {name: "Dodge", models: ["Charger","Challenger", "TrackHawk", "Hellcat"]},
        {name: "BMW", models: ["M4 series", "M5 series","X2", "X6 coupe"]}
    ] 
}
for (let g in tb.cars) {
    xt += "<br>" + "<h2>" + tb.cars[g].name + "</h2>" + "<br>";

    for (let k of tb.cars[g].models) {
    xt += tb.cars[g].name + ": " + k + "<br>";
    }
}   
document.getElementById("a27").innerHTML = xt;

let shop = [35,20, 12, 17, 19, 38];
let shops = shop.map(shoppy);
 function shoppy(value, index, array) {
    return value * 2;
 } 
 function filter (value) {
    return value > 18
 }
 function reduce(total, value) {
    return total + value
 }
 function every(value) {
    return value < 18
 }
 function some(value) {
    return value < 18
 } 
 let shop3 = shop.reduce(reduce);
 let shop2 = shop.filter(filter);
 let shop4 = shop.every(every);
 let shop5 = shop.some(some);
 let slop = "ABCDEFGHIJKMNLOPQ";
 let shop6 = Array.from(slop);
 let shop7 = "";
for (let k of shop) {
    shop7 += k + "<br>";
}
 let slop1 = data.entries();
 let shop8 = "";
 for (let k of slop1) {
    shop8 += k + "<br>"; 
 }
 let slop3 = data.with(0, "Pelumi");
 let shop9 = [...data,...shop];

 document.getElementById("a29").innerHTML = shops + "<br>" + shop2 + "<br>" + shop3 +"<br>" + shop4 +"<br>" + shop5 + "<br>" + shop6 + "<br>" + shop7 + "<br>" + shop8 + "<br>" + slop3 + "<br>" + shop9;
 let shop1 = shop.flatMap(x => [x, x * 10]);
 document.getElementById("shop1").innerHTML = shop1;

 let letty = "";
 const letter = new Set(["Pelumi", "John", "Adebayo", "Olamide"]);
 letter.add("Feranmi");
  let letters = letter.keys();
  
  for (let k of letters) {
    letty += k + "<br>"
  }
  let letts = letter.has("Adebayo");
  document.getElementById("a30") .innerHTML = "<br>" + letty + "<br>" + letts;
  let visit = "";
  const client = new WeakSet();
  const Blessing = {name: "Blessing", age: 25};
  const Pelumi = { name: "Pelumi", age:20};
  const Mayorkun = {name: "Mayorkun", age: 17};
 track(Blessing);
 track(Pelumi);
 track(Mayorkun);
 track(Pelumi)
 function track(visitor) {
    if(client.has(visitor)) {
        visit += visitor.name + " Checked in again" + "<br>";
    } else{
        client.add(visitor)
        visit += "Name: " + visitor.name +"<br>"+"Age: " +  visitor.age + " is Checking in for the first time" + "<br>" + "<br>"; 
    }
 }
 document.getElementById("a31").innerHTML= visit;
 const mapel = new Map();
 mapel.set("Apple", 500);
 mapel.set("Orange", 550);
 mapel.set("Pineapple",3256);
 mapel.set("name", "Pelumi");
 mapel.set("middleName", "John");
 mapel.set("lastName", "Adebayo");
 let mapi = mapel.get("middleName");
 let map3 = "";
 mapel.forEach(function(key, value) {
     map3 += "<br>" + value +" " + key + "<br>";
 })
 let mappy = "";
 for (let k of mapel.values()) {
    mappy += k + "<br>";
 }
 document.getElementById("a32").innerHTML = mapel.get("lastName") + "<br>" + mapi + map3 + "<br>" + mappy;
 const Inventory = [
    {name: "Golden Moore", quantity: 1500},
    {name: "Chocolate", quantity: 2200},
    {name: "Custard", quantity: 1700},
    {name: "Milk", quantity: 5000},
    {name: "Coffee", quantity: 1200}
 ];
 function lowInvent({quantity}) {
    return quantity > 2000 ? "OK" : "Low";
 }
 const StockLt = Map.groupBy(Inventory,lowInvent);
 let stock = "This Product Inventory is Ok <br> ";
 for (let k of StockLt.get("OK")) {
    stock += k.name + ": " + k.quantity + "<br>";
 }
 let stocks = "This Product Inventory is low" + "<br>"
 for (let m of StockLt.get("Low")) {
    stocks += m.name + ": " + m.quantity + "<br>";
 }
 document.getElementById("a33").innerHTML = stock + "<br>" + stocks;
 function randomNu() {
    let n = 0;
    return {
        next: function() {
            n += 10;
            return {value:n, done: false};
        }
    };
 }
 const random = randomNu();
 random.next();
 document.getElementById("a34").innerHTML = random.next().value;
 const myIterate = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 let iterate2 = myIterate.drop(4);
 let iterate = "";
 let iterate3 = myIterate.filter(x => x > 5);
 for (let k of iterate2) {
    iterate += k+ "<br>" ;
 }
 document.getElementById("a35").innerHTML = iterate + "<br>";
 let sum1 = Math.floor(Math.random() * 2);
 function yesNo() {
    return Math.random() < 0.5 ? "Yes" : "NO";
 }
 function ranfunc(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 let sum3 = yesNo();
 let sum5 = ranfunc(5,100);
 const color = ["red", "blue", "green", "yellow", "purple"];
 let sum4 = color[Math.floor(Math.random() * color.length)];
 document.getElementById("a37").innerHTML = sum1 + "<br>" + sum3 + "<br>" + sum4 + "<br>" + sum5;
 let sum2 = Inventory.reduce((quantity,value ) => quantity + value.quantity, 0);
 const regxarr = "My Name is Pelumi John Adebayo";
 let texst = /e/g;
 let texxt = regxarr.match(/e/);

 document.getElementById("a36").innerHTML = sum2 + "<br>" + texxt;