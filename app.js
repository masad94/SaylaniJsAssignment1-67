/* //Chpter 1

// Task 01
alert("Welcome to my Website");

// Task 02
alert("Error! Please enter a valid password.");

//Task 03
alert("Welcome to JS Land...\nHappy Coding!");

//Task 04
alert("Welcome to JS Land...");
alert("Happy Coding!");

//Task 05
//To generate output in console
console.log("Hello... I can run JS through my web browser's console");

//To generate alert through web browser's developer console
// Press F12 key to get into developer modes and then head to the console tab and write
alert("Hello... I can run JS through my web browser's console");

//Task 06 & 7
 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Task 6 and 7a</title>
<script>
alert("Hello World from the head")
</script>
</head>
<body>
<h3>Hello World</h3>
</body>
</html>

//Task 7b
 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Task 7b</title>
</head>
<body>
<script>alert("Hello from start of body")</script>
<h3>Hello World</h3>
</body>
</html>

//Task 7c
 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Task7c</title>
</head>
<body>
<h3>Hello World</h3>
<script>alert("Welcome from inside the body")</script>
<p>Welcome to my page</p>
</body>
</html> 

//Task 7d
 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Task7d</title>
</head>
<body>
<h3>Hello World</h3>

<script>alert("Hello from the end of body")</script>
</body>
</html> 

//Chapter 2
//Task 01
var username;

//Task 02
var myName="Muhammad Asad Khan";

//Task 03
var message;
message="Hello World";
alert(message);

//Task 04
var name="Jhone Doe";
var age=15;
var certificate="Certified Mobile Application Development";
alert(name);
alert(age+" years old");
alert(certificate);

//Task 05
var msg="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(msg);

//Task 06
var email="masad94@hotmail.com";
alert("My email address is "+email);

//Task 07
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

//Task 08
document.write("Yah! I can write HTML content through JavaScript");

//Task09
var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(str);

//Chapter 3
//Task 01
var age=28;
alert("I am "+age + " years old");

//Task 02
var visit=12;
alert("You have visited this site "+visit + " times");

//Task 03
var birthYear=1993;
document.write("My birth year is "+birthYear);
document.write("\nData type of my declared variable is "+ typeof(birthYear));

//Task 04
var visitor="John Doe"
var product="T-shirt(s)"
var quantity=5;
document.write(visitor + " ordered "+ quantity + " " + product+ " on XYZ Clothing store ");

//Chapter 4
//Task 01
var val1,val2,val3;

//Task 02
var username;
var $username;
var _myvar;
var my_var;
var var234;
//Illegal variable names
var 1var;
var ?my_var;
var typeof;
var \val1;
var my#Val;

//Task 03
document.write("<h2>Rules for naming JS variables/h2>");
document.write("\n\nVariable names can only contain letters, numbers, $ and _. For example $my_1stVariable ");
document.write("\nVariables must begin with a letter, $ or _. For example $name, _name or name ");
document.write("\n Variable names are case sensative");
document.write("\nVariable names should not be JS keywords");

//Chapter 5
//Task 01
var val1=parseInt(prompt("Enter 1st Value"));
var val2=parseInt(prompt("Enter 2nd Value"));
var sum=val1+val2;
document.write("Sum of "+val1 + " and "+val2 +" is "+ sum);

//Task02
var val1=parseInt(prompt("Enter 1st Value"));
var val2=parseInt(prompt("Enter 2nd Value"));
var difference=val1-val2;
document.write("Difference of "+val1 + " and "+val2 +" is "+ difference);

var val1=parseInt(prompt("Enter 1st Value"));
var val2=parseInt(prompt("Enter 2nd Value"));
var divide=val1/val2;
document.write("Division of "+val1 + " by "+val2 +" is "+ divide);

var val1=parseInt(prompt("Enter 1st Value"));
var val2=parseInt(prompt("Enter 2nd Value"));
var product=val1*val2;
document.write("Product of "+val1 + " and "+val2 +" is "+ product);

//Task 03
var value;
document.write("<br>Value after variable declaration is: "+value);
value=45;
document.write("<br>Initial value: "+value);
++value;
document.write("<br>Value after incremnt is: ",value);
value+=7;
document.write("<br>Value after addition is: "+value);
--value;
document.write("<br>Value after decrement is: "+value);
value%=3;
document.write("<br>The remainder is: "+value);

//Task 04
var cost=600;
var totalCost=5*cost;
document.write("Total cost to buy 5 tickets to a movie is "+totalCost+ " PKR");


var cost=parseInt(prompt("Enter price of ticket:"));
var noOfTickets=parseInt(prompt("Enter No. of tickets: "));
var totalCost=noOfTickets*cost;
document.write("Total cost to buy "+noOfTickets+ " tickets to a movie is "+totalCost+ " PKR");

//Task 05
var no=4;
document.write("Table of "+ no);
document.write("<br> "+no+ "x1= "+no*1);
document.write("<br> "+no+ "x2= "+no*2);
document.write("<br> "+no+ "x3= "+no*3);
document.write("<br> "+no+ "x4= "+no*4);
document.write("<br> "+no+ "x5= "+no*5);
document.write("<br> "+no+ "x6= "+no*6);
document.write("<br> "+no+ "x7= "+no*7);
document.write("<br> "+no+ "x8= "+no*8);
document.write("<br> "+no+ "x9= "+no*9);
document.write("<br> "+no+ "x10= "+no*10);

//Task 06
var tempC=45;
var tempF= (tempC*9/5)+32;
document.write("<br>"+tempC+"oC is " +tempF+"oF");
tempC=(tempF-32)*5/9;
document.write("<br>"+tempF+"oF is " +tempC+"oC");

//Task 07
var item1=25;
var item2=30
var quant1=5;
var quant2=3;
var shippingCharges=100;
document.write("<h1>Shopping Cart</h1><br><br>");
document.write("<br>Price of 1st item is "+item1);
document.write("<br>Quantity of 1st item is "+quant1);
document.write("<br>Price of 2nd item is "+item2);
document.write("<br>Quantity of 2nd item is "+quant2);
document.write("<br>Shipping Charges "+shippingCharges);
document.write("<br><br>Total cost of your order is "+((item1*quant1)+(item2*quant2)+shippingCharges))



//Task 08
var totalMarks=980;
var obtainedMarks=804;
var percent=obtainedMarks/totalMarks*100;
document.write("<h1>Marks Sheet</h1><br><br>");
document.write("<br>Total Marks: "+totalMarks);
document.write("<br>Marks Obtained: "+obtainedMarks);
document.write("<br>Percentage: "+percent);

//Task 09
var dollar=10;
var riyals=25;
var currency=(10*104.80)+(25*28);
document.write("<h1>Currency in PKR</h1><br><br>")
document.write("<br>Total Currency in PKR: "+currency);

//Task 10
var num=20;
num=((num+5)*10)/2; 

//Task 11
var currentYear=2020;
var birthYear=1993;
var age=currentYear-birthYear;
document.write("<h1>Age Calculator</h1><br><br>");
document.write("<br>Current Year: "+currentYear);
document.write("<br>Birth Year: "+birthYear);
document.write("<br>Your Age is: "+age);

//Task 12
var r=20;
var pi=3.142;
var c=2*pi*r;
var area=pi*(r**2);
document.write("<h1>The Geometrizer</h1><br><br>");
document.write("<br>Radius of circle: "+r);
document.write("<br>The circumference is: "+c);
document.write("<br>The area is: "+area);

//Task 13
var snack="choclate chip";
var currentAge=15;
var maxAge=65;
var est=3;
var total=(maxAge-currentAge)*est;
document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
document.write("<br>Favourite Snack: "+snack);
document.write("<br>Current Age: "+currentAge);
document.write("<br>Estimated Maximum Age: "+maxAge);
document.write("<br>Amount of snacks per day: "+est);
document.write("<br>You will need "+total +" to last you until the ripe old age of "+maxAge);

//Chapter 6-9
//Task 01
var val=10;
document.write("Result:");
document.write("<br>The value of a is: "+val);
document.write("<br>...............................");

document.write("<br>The value of ++a is: "+(++val));
document.write("<br>Now the value of a is: "+val);


document.write("<br>The value of a++ is: "+(val++));
document.write("<br>Now the value of a is: "+val);


document.write("<br>The value of --a is: "+(--val));
document.write("<br>Now the value of a is: "+val);


document.write("<br>The value of a-- is: "+(val--));
document.write("<br>Now the value of a is: "+val);

//Task 02
var a=2,b=1;
var result = --a - --b + ++b + b--; 
//            1 -   0  + 1   +  1;
document.write("a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);

//Task 03
var name=prompt("Enter Your name");
document.write("Welcome "+name);


//Task 04
var no=parseInt(prompt("Enter number",5));
document.write("Table of "+ no);
document.write("<br> "+no+ "x1= "+no*1);
document.write("<br> "+no+ "x2= "+no*2);
document.write("<br> "+no+ "x3= "+no*3);
document.write("<br> "+no+ "x4= "+no*4);
document.write("<br> "+no+ "x5= "+no*5);
document.write("<br> "+no+ "x6= "+no*6);
document.write("<br> "+no+ "x7= "+no*7);
document.write("<br> "+no+ "x8= "+no*8);
document.write("<br> "+no+ "x9= "+no*9);
document.write("<br> "+no+ "x10= "+no*10);

//Task 05
var sub1=prompt("Enter Subject Name");
var sub2=prompt("Enter Subject Name");
var sub3=prompt("Enter Subject Name");
var subTotal=100;
var obt1=parseInt(prompt("Enter 1st Subject obtained Marks"));
var obt2=parseInt(prompt("Enter 2nd Subject obtained Marks"));
var obt3=parseInt(prompt("Enter 3rd Subject obtaned Marks"));
var totalMarks=subTotal+subTotal+subTotal;
var obtainedMarks=obt1+obt2+obt3;
var percent=obtainedMarks/totalMarks*100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>"+sub1+"</td><td>"+subTotal+"</td><td>"+obt1+"</td><td>"+(obt1/subTotal*100)+"%</td></tr>");
document.write("<tr><td>"+sub2+"</td><td>"+subTotal+"</td><td>"+obt2+"</td><td>"+(obt2/subTotal*100)+"%</td></tr>");
document.write("<tr><td>"+sub3+"</td><td>"+subTotal+"</td><td>"+obt3+"</td><td>"+(obt3/subTotal*100)+"%</td></tr>");
document.write("<tr><td> </td><td>"+totalMarks+"</td><td>"+obtainedMarks+"</td><td>"+percent+"%</td></tr></table>");

//Chapter 9-11
//Task 01
var city=prompt("Enter City Name");
if(city==="Karachi")
{
document.write("Welcome to city of lights");
}

//Task 02
var gender=prompt("Enter your gender");
if(gender==="male")
{
document.write("Good Morning Sir");
}
else if( gender==="female")
{
document.write("Good Morning Ma'am");
}

//Task 03
var color=prompt("Enter color of road traffic signal");
if(color==="red"){
document.write("Must Stop");
}
else if(color==="yellow"){
document.write("Ready to Move");
}
else if(color==="green"){
document.write("Move now");
}

//Task 04
var fuel=parseFloat(prompt("Enter remaining fuel quantity in litres"));
if(fuel<0.25){
document.write("Please refill the fuel in your car");   
}

//Task 05
//a. alert displayed
//b. alert not displayed
//c. condition 2 and condition 4 alert displayed
//d. "The cost equals" alert displayed
//e. "True" alert displayed
//f. "car is smaller than cat" alert displayed

//Task 06
var sub1=parseInt(prompt("Enter your 1st subject marks"));
var sub2=parseInt(prompt("Enter your 2nd subject marks"));
var sub3=parseInt(prompt("Enter your 3rd subject marks"));
var total=parseInt(prompt("Enter Total Marks"));
var obtainedMarks=sub1+sub2+sub3;
var percent=obtainedMarks/total*100;
document.write("<h2>Marks Sheet</h2><br><br>");
if(percent>=80)
{
document.write("<br>Total Marks: "+total);
document.write("<br>Marks Obtained: "+obtainedMarks);
document.write("<br>Percentage: "+percent+"%");
document.write("<br>Grade: A-one");
document.write("<br>Remarks: Excellent");
}
else if(percent>=70&&percent<80)
{
document.write("<br>Total Marks: "+total);
document.write("<br>Marks Obtained: "+obtainedMarks);
document.write("<br>Percentage: "+percent+"%");
document.write("<br>Grade: A");
document.write("<br>Remarks: Good");
}
else if(percent>=60&&percent<70)
{
document.write("<br>Total Marks: "+total);
document.write("<br>Marks Obtained: "+obtainedMarks);
document.write("<br>Percentage: "+percent+"%");
document.write("<br>Grade: B");
document.write("<br>Remarks: You need to improve");
}
else if(percent<60)
{
document.write("<br>Total Marks: "+total);
document.write("<br>Marks Obtained: "+obtainedMarks);
document.write("<br>Percentage: "+percent+"%");
document.write("<br>Grade: Fail");
document.write("<br>Remarks: Sorry");
}

//Task 07
var num=6;
var guess=parseInt(prompt("Enter your guess (ranging from 1 to 10)"));
if(num===guess)
{
document.write("Bingo! Correct answer");
}
else if(num===guess+1){
document.write("Close enough to the correct answer");
}

//Task 08
var num=parseInt(prompt("Enter a number"));
if(num%3===0)
{
document.write("Number is divisible by 3");
}

//Task 09
var num=parseInt(prompt("Enter a number"));
if(num%2===0){
document.write("Number is even");
}
else{
document.write("Number is odd");
}

//Task 10
var temp=parseInt(prompt("Enter temprature"));
if(temp>40){
document.write("It's too hot outside.");
}
else if(temp>30&&temp<=40){
document.write("The weather today is Normal");
}
else if(temp>20&&temp<=30){
document.write("Today's weather is cool.");
}
else if(temp>10&&temp<=20){
document.write("OMG! Today's weather is so cool.");
}

//Task 11
var num1=parseInt(prompt("Enter 1st number"));
var num2=parseInt(prompt("Enter 2nd number"));
var op=prompt("Enter operation you want to perform");
if(op==='+'){
document.write(num1+num2);
}
else if(op==='-')
{
document.write(num1-num2);
}
else if(op==='*')
{
document.write(num1*num2);
}
else if(op==='/')
{
document.write(num1/num2);
}
else if(op==='%')
{
document.write(num1%num2);
}

//Chapter 12-13
//Task 01
var input=prompt("Enter chracter");
if(!isNaN(input*1)){
alert("Numeric chracter");
}
else{
if (input == input.toUpperCase()) {
alert ("Upper case chracter");
}
else if (input == input.toLowerCase()){
alert ("Lower case character");
}
}

//Task 02
var num1=parseInt(prompt("Enter 1st number"));
var num2=parseInt(prompt("Enter 2nd number"));
if(num1>num2){
document.write(num1);
}
else if(num===num2){
document.write(num1 +" and "+num+" are equal");
}
else{
document.write(num2);
}

//Task 03
var num=parseInt(prompt("Enter a number"));
if(num<0){
document.write("Number is negative");
}
else if(num>0){
document.write("Number is positive");
}
else{
document.write("Number is zero");
}

//Task 04
var char=prompt("Enter a single chracter");
if(char==='a'||char==='A'||char==='e'||char==='E'||char==='i'||char==='I'||char==='o'||char==='O'||char==='u'||char==='U'){
document.write("Character is a vowel");
}
else{
document.write("Character is not a vowel")
}

//Task 05
var pswd="hello";
var enter=prompt("Enter your password");
if(enter==='')
{
alert("Please enter your password");
}
else{
if(enter===pswd){
alert("Correct! The password you entered matches the original password");
}
else{
alert("Incorrect password");
}
}

//Task 06
var greeting;
var hour = 13;
if (hour < 18){
greeting = "Good day";
}
else{
greeting = "Good evening";
}

//Task 07
var time=prompt("Enter time in 24-hour format",'1900');
if(time>='0000'&&time<'1200'){
alert("Good Morning!");
}
else if(time>='1200'&&time<'1700'){
alert("Good Afternoon!");
}
else if(time>='1700'&&time<'2100'){
alert("Good Evening!");
}
else if(time>='2100'&&time<='2359'){
alert("Good Night!");
}

//Chapter 14-16
//Task 01
var arr=[];

//Task 02
var arr=new Array();

//Task 03
var strarr=["Asad","Usman","Akmal"];

//Task 04
var numarr=[3,5,6];

//Task 05
var boolarr=[true,false];

//Task 06
var mixarr=["Hello",45,true];

//Task 07
var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("Qualifications:<br>");
document.write("<br>1) "+qual[0]);
document.write("<br>2) "+qual[1]);
document.write("<br>3) "+qual[2]);
document.write("<br>4) "+qual[3]);
document.write("<br>5) "+qual[4]);
document.write("<br>6) "+qual[5]);  
document.write("<br>7) "+qual[6]);
document.write("<br>8) "+qual[7]);

//Task 08
var students=["Ahmed","Ali","Usman"];
var marks=[360,269,300];
document.write("Score of "+students[0]+" is "+marks[0]+". Percentage: "+(marks[0]/500*100)+"%");
document.write("<br>Score of "+students[1]+" is "+marks[1]+". Percentage: "+(marks[1]/500*100)+"%");
document.write("<br>Score of "+students[2]+" is "+marks[2]+". Percentage: "+(marks[2]/500*100)+"%");

//Task 09
var colors=["red","green","blue"];
document.write(colors);
console.log(colors);
//a
var newcolor=prompt("Enter the color which you want to add at start of array");
colors.unshift(newcolor);
document.write("<br>"+colors);
//b
var newcolor=prompt("Enter the color which you want to add at end of array");
colors.push(newcolor);
document.write("<br>"+colors);
//c
colors.unshift("black","brown");
document.write("<br>"+colors);
//d
colors.shift();
document.write("<br>"+colors);
//e
colors.pop();
document.write("<br>"+colors);
//f
var index=parseInt(prompt("On which index you want to enter color?"));
var newcolor=prompt("Enter the color which you want to add at array:");
colors.splice(index,0,newcolor);
document.write("<br>"+colors);
//g
var index=parseInt(prompt("From which index you want to Delete colors?"));
var del=parseInt(prompt("How many colors you want to delete?"));
colors.splice(index,del);
document.write("<br>"+colors);

//Task 10
var marks=[450,389,444,124];
document.write("Score of Students: "+marks);
document.write("<br>Ordered Score of Students: "+marks.sort( function(a, b) {return a-b}));


//Task 11
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities=cities.slice(2,4);
document.write("Cities List:<br>"+cities);
document.write("<br>Selected Cities List:<br>"+selectedCities);

//Task 12
var arr = ["This", "is", "my", "cat"]; 
document.write(arr.join(" "));

//Task 13
var devices=["Keyboard","Mouse","Printer","Monitor"];
document.write("Devices:<br>"+devices);
document.write("Out:<br>"+devices.shift());
document.write("Out:<br>"+devices.shift());
document.write("Out:<br>"+devices.shift());
document.write("Out:<br>"+devices.shift());

//Task 14
var devices=["Keyboard","Mouse","Printer","Monitor"];
document.write("Devices:<br>"+devices);
document.write("Out:<br>"+devices.pop());
document.write("Out:<br>"+devices.pop());
document.write("Out:<br>"+devices.pop());
document.write("Out:<br>"+devices.pop());

//Task 15
var mobile=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<form><select><option>"+mobile[0]+"</option><option>"+mobile[1]+"</option><option>"+mobile[2]+"</option><option>"+mobile[3]+"</option><option>"+mobile[4]+"</option><option>"+mobile[5]+"</option></select></form>");

//Chapter 17-20
//Task 01
var multiarr=[[]];

//Task 02
var multiarr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//Task 03
for(i=1;i<=10;i++){
document.write(i+"<br>");
}

//Task 04
var table=parseInt(prompt("Enter a number to show its multiplication table"));
var length=parseInt(prompt("Enter length of table"));
document.write("Multiplication table of "+table);
document.write("<br>Length "+length+"<br>");
for(i=1;i<=length;i++)
{
document.write("<br>"+table+" x "+i+" = "+table*i);
}

//Task 05
var fruits=["apple","banana","mango","orange","strawberry"];
for(i=0;i<fruits.length;i++){
document.write(fruits[i]+"<br>");
}

for(i=0;i<fruits.length;i++){
document.write("<br>Element at index "+i+" is "+fruits[i]);
}

//Task 06
//a
document.write("Counting: ");
for(i=1;i<=15;i++){
document.write(i+",");
}
//b
document.write("<br>Reverse Counting: ");
for(i=10;i>=1;i--){
document.write(i+",");
}
//c
document.write("<br>Even:");
for(i=0;i<=20;i+=2){
document.write(i+",");
}
//d
document.write("<br>Odd: ");
for(i=1;i<=20;i+=2){
document.write(i+",");
}
//e
document.write("<br>Series: ");
for(i=2;i<=20;i+=2){
document.write(i+"k,");
}

//Task 07
var A=["cake","apple pie","cookie","chips","patties"];
var input=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(i=0;i<A.length;i++){
if(A[i]===input){
document.write(input+" is avialable at index "+i+" in our bakery");
break;
}
else if(i==A.length-1){
document.write(input+" is not avialable in our bakery");
}   
}

//Task 08
var A = [24, 53, 78, 91, 12];
document.write("Array items: "+A);
var largest= 0;

for (i=0; i<=largest;i++){
if (A[i]>largest) {
var largest=A[i];
}
}
document.write("<br>The largest number is "+largest);

//Task 09
var A = [24, 53, 78, 91, 12];
document.write("Array items: "+A);
var smallest = A[0];
for (i = 1; i < A.length; i++) {
if (A[i] < smallest) {
smallest = A[i];
}
}
document.write("<br>The smallest number is "+smallest);

//Task 10
for(i=1;i<=100;i++){
if(i%5==0){
document.write(i+",");
}
}

//Chapter 21-25

//Task 01
var firstName=prompt("Enter Your First Name");
var lastName=prompt("Enter Your Last Name");
var fullName=firstName+lastName;
alert("Welcome "+fullName);

//Task 02
var favMobile=prompt("Enter your favourite mobile phone model");
var length=favMobile.length;
document.write("My favourite phone is: " + favMobile);
document.write("<br>Length of string: " + length);

//Task 03
var word="Pakistani";
var index=word.indexOf('n');
document.write("String: "+word);
document.write("<br>Index of 'n': "+index);

//Task 04
var word="Hello World";
var index=word.lastIndexOf('l');
document.write("String: "+word);
document.write("<br>Last index of 'l': "+index);

//Task 05
var word="Pakistani";
var char=word[3];
document.write("String: "+word);
document.write("<br>Character at index 3: "+char);

//Task 06
var firstName=prompt("Enter Your First Name");
var lastName=prompt("Enter Your Last Name");
var fullName=firstName.concat(" "+lastName);
alert("Welcome "+fullName);

//Task 07
var word="Hyderabad";
for(i=0;i<word.length;i++){
if(word.slice(i,i+5)=="Hyder")
{
var newword="Islam"+word.slice(i+5,);
break;
}
}
document.write("City: "+word);
document.write("<br>After replacement: "+newword);

//Task 08
var message="Ali and Sami are best friends. They play cricket and football together."
var arr=message.split("and");
message=arr.join('&');
document.write(message);

//Task 09
var val="472";
var typ=typeof(val)
document.write("Value: "+val);
document.write("<br>Type: "+typ);
val=Number(val);
typ=typeof(val);
document.write("<br>Value: "+val);
document.write("<br>Type: "+typ);

//Task 10
var input=prompt("Enter Word");
var output=input.toUpperCase();
document.write("User input: "+input);
document.write("<br>Upper case: "+output);

//Task 11
var input=prompt("Enter Word");
var output=input.charAt(0).toUpperCase()+input.slice(1,);
document.write("User input: "+input);
document.write("<br>Upper case: "+output);

//Task 12
var num=35.36;
var str=num.toString().split(".").join("");
document.write("Number: "+num);
document.write("Result: "+str);

//Task13
var username=prompt("Enter Username");
for(i=0;i<username.length;i++)
{
if(username.charCodeAt(i)==33||username.charCodeAt(i)==44||username.charCodeAt(i)==46||username.charCodeAt(i)==64)
{
alert("Please Enter a valid username");
break;
}
}

//Task 14
var A=["cake","apple pie","cookie","chips","patties"];
var found="";
var srch=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(i=0;i<A.length;i++){
if(A[i]===srch.toLowerCase())
{
found=A[i];
break;
}
}

if(found!="")
{
document.write(found + " is avialable at index "+i +" in our bakery");
}
else{
document.write("We are sorry. "+srch + " is not avialable in our bakery");
}

//Task 15
var paswd=prompt("Enter Password (at least 6 Character and must be alphanumeric");
var flag='invalid';
document.write("Entered Password: "+paswd);
if(paswd.length>=6){
if(paswd.charCodeAt(0)>=48 && paswd.charCodeAt(0)<=57){
document.write("<br>Password can not begin with a number");
document.write("<br>Please enter a valid password");
}
else{
for(i=1;i<paswd.length;i++){
    if(paswd.charCodeAt(i)>=48 && paswd.charCodeAt(i)<=57){
        document.write("<br>Valid Password");
        flag='valid';
        break;
    }
}
if(flag!='valid'){
document.write("<br>Password must contain a number");
document.write("<br>Please enter a valid password");
}
}
}
else{
document.write("<br>Password must be at least 6 character long");
document.write("<br>Please enter a valid password");
}

//Task 16
var university = "University of Karachi";
var arr=university.split("");
for(i=0;i<arr.length;i++){
document.write(arr[i]+"<br>");
} 

//Task 17
var input=prompt("Enter word");
var lstchar=input.length-1;
var ch=input.charAt(lstchar);
document.write("User input: "+input);
document.write("<br>Last Character of input: "+ch);

//Task 18
var word="The quick brown fox jumps over the lazy dog";
var count=0;
for(i=0;i<word.length;i++){
if(word.toLowerCase().slice(i,i+3)=="the")
{
count+=1;
}
}


//Chapter 26-30

//Task 01
var num=prompt("Enter a positive integer");
document.write("Number: "+Number(num));
document.write("<br>round of value: "+Math.round(num));
document.write("<br>floor value: "+Math.floor(num));
document.write("<br>ciel value: "+Math.ceil(num));

//Task 02
var num=prompt("Enter a negative floating point number");
document.write("Number: "+Number(num));
document.write("<br>round of value: "+Math.round(num));
document.write("<br>floor value: "+Math.floor(num));
document.write("<br>ciel value: "+Math.ceil(num));

//Task 03
var num=prompt("Enter a number");
document.write("The absoultue value of "+num+": is"+Math.abs(num));

//Task 04
var num=Math.random()*6;
document.write("<br>random dice value: "+Math.ceil(num));

//Task 05
var num=Math.random()*2;
document.write(Math.ceil(num)+"<br>random coin value: ");
document.write(Math.ceil(num)==2?"Heads":"Tails");

//Task 06
var num=Math.floor((Math.random()*100)+1);
document.write("<br>random number between 1 and 100: "+num);

//Task 07
var input=prompt("Enter weight in kilograms");
var value="";
for(i=0;i<input.length;i++){
if(input.charCodeAt(i)>=48 && input.charCodeAt(i)<=57 || input.charCodeAt(i)==46){
value+=input[i];
}
}
value=Number(value);
document.write("The weight of user is "+value+" kilograms");

//Task 08
var secret=Math.floor((Math.random()*10)+1);
var guess=+prompt("Enter a number between 1 & 10");
if(guess==secret){
alert("Congratulatons! Correct Guess!!!");
}
else
{
alert("Try again!");
}


//Chapter 31-34

//Task 01
document.write(Date());

//Task 02
var d=new Date();
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month: "+months[d.getMonth()]);

//Task 03
var d=new Date();
var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is : "+days[d.getDay()]);

//Task 04
var d=new Date();
if(d.getDay()==0||d.getDay()==6){
alert("It's Fun day");
}

//Task 05
var d=new Date();
if(d.getDate()<=15){
alert("First fifteen days of the month");
}
else
{
alert("Last fifteen days of the month");
}

//Task 06
var d=new Date();
document.write("Current Date: "+Date());
var milisecond=d.getTime();
var mili=d.getTime();
document.write("<br>Elapsed milliseconds since January 1, 1970: "+milisecond);
var minutes=d.getTime()/60000;
document.write("<br>Elapsed seconds since January 1, 1970: "+minutes);

//Task 07
var d=new Date();
if(d.getHours()>=0 || d.getHours()<12){
alert("It's AM")
}
else
{
alert("It's PM");
}

//Task 08
var laterDate=new Date("31 Dec,2020");
document.write("Later date: "+laterDate);    

//Task 09
var ramzan=new Date("25 Apr,2020");
var date=new Date();
var miliramzan=ramzan.getTime();
var milidate=date.getTime();
var diff=milidate-miliramzan;
var days=diff/(1000*60*60*24);
document.write(Math.ceil(days)+" days have been passed since 1st Ramadan,2020");

//Task 10
var refDate=new Date(prompt("Enter reference Date"));
var d=new Date("1 Jan,2015");
var diff=(refDate.getTime()-d.getTime())/(1000*60);
document.write("On reference date: "+refDate);
document.write("<br>"+Math.ceil(diff)+" seconds have been passed");

//Task 11
var d=new Date();
document.write("Current Date: "+d);
d.setHours(d.getHours()-1);
document.write("<br>1 hour ago, it was "+d);

//Task 12
var d=new Date();
document.write("Current Date: "+d);
d.setFullYear(d.getFullYear()-100);
document.write("<br>100 year back, it was "+d);

//Task 13
var age=+Number(prompt("Enter your age"));
var d=new Date();
var year=d.getFullYear()-age;
document.write("Your age is "+age);
document.write("<br>Your birth year is "+year);

//Task 14
var customer=prompt("Enter your Name");
var d=new Date();
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var month=months[d.getMonth];
var units=+prompt("Enter number of units");
var charges=16;
var lateSurcharge=350;
var netAmount=units*charges;
var grossAmount=netAmount+lateSurcharge;
document.write("<h1>K-Electric Bill</h1><br>");
document.write("<br>Customer Name: "+customer);
document.write("<br>Month: "+month);
document.write("<br>Number of units: "+units);
document.write("<br>Charges per unit: "+charges);
document.write("<br><br>Net Amount Payable (within Due Date): "+netAmount);
document.write("<br>Late payment surcharge : "+lateSurcharge);
document.write("<br>Gross Amount Payable (after Due Date): "+grossAmount);


//Chapter 35-38

//Task 01
function showDate(){
document.write(Date());
}
showDate();

//Task 02
function fullName(){
var firstName=prompt("Enter Your First Name");
var lastName=prompt("Enter Your Last Name");
alert("Hello "+firstName +" "+lastName);
}
fullName();

//Task 03
function add(){
var a=+prompt("Enter 1st Number");
var b=+prompt("Enter 2nd Number");
alert(a+b);
}
add();

//Task 04
function calc(num1,num2,op){
if(op==='+'){
document.write(num1+num2);
}
else if(op==='-')
{
document.write(num1-num2);
}
else if(op==='*')
{
document.write(num1*num2);
}
else if(op==='/')
{
document.write(num1/num2);
}
else if(op==='%')
{
document.write(num1%num2);
}
}
var val1=parseInt(prompt("Enter 1st number"));
var val2=parseInt(prompt("Enter 2nd number"));
var operation=prompt("Enter operation you want to perform");
calc(val1,val2,operation)

//Task 05
function sq(a){
alert("square of "+a +" is "+ a**2);
}
sq(5);

//Task 06
function fact(a){
var num=1;
for(i=a;i>0;i--){
num=num*i;
}
alert(num);
}
fact(5)

//Task 07
function counting(strt,en){
for(i=strt;i<=end;i++)
{
document.write("<br>"+i);
}
}
var start=+prompt("Enter Starting Number");
var end=+prompt("Enter Ending Number");
counting(start,end);

//Task 08
function calculateHypothesis(b,p){
function calculateSquare(num){
return num**2;
}
b=calculateSquare(b);
p=calculateSquare(p);
h=Math.sqrt(b+p);
alert("Hypothesis of right angle triangle is "+h);
}

calculateHypothesis(4,6);

//Task 09
function area(w,h){
var a=w*h;
alert(a);
}
//(i)
area(5,7);
//(ii)
var width=20;
var height=40;
area(width,height);

//Task 10
function palindrome(w)
{
w=w.toLowerCase();
var reverse="";
for(i=w.length-1;i>=0;i--){
reverse+=w[i];
}
if(w==reverse){
alert("The entered word is palindrome");
}
else{
alert("The entered word is not a palindrome");
}
}
var word=prompt("Enter Word");
palindrome(word);

//Task 11
function upperWords(s){
var arr=s.split(" ");
for(i=0;i<arr.length;i++){
var spl=arr[i].split("");
spl[0]=spl[0].toUpperCase();
arr[i]=spl.join("");
}
s=arr.join(" ");
document.write(s);
}
var sentense= prompt("Enter a sentense");
upperWords(sentense);

//Task 12
function longestWords(s){
var arr=s.split(" ");
var longestWord;
var longest=0;
var count=0;
for(i=0;i<arr.length;i++){
var spl=arr[i].split("");
count=spl.length;
if(count>longest){
    longestWord=arr[i];
    longest=count;
}
}
document.write("Input String: "+s);
document.write("<br>Longest Word in the String is: "+longestWord);  
}

var sentense=prompt("Enter a sentense");
longestWords(sentense);

//Task 13
function charCount(str,char){
var arr=str.toLowerCase().split("");
char=char.toLowerCase();
var count=0;
for(i=0;i<arr.length;i++){
if(arr[i]===char){
    count+=1;
}
}
document.write("Character '"+char +"' appears "+count+ " times in the sentence '"+str+"'");
}
var s=prompt("Enter a sentence");
var ch=prompt("Enter a character");
charCount(s,ch);

//Task 14
function calcCirumference(r){
var c=2*Math.PI*r;
document.write("The Circumference is "+c);
}

function calcArea(r){
var a=Math.PI*(r**2);
document.write("The are is "+a);
}

var radius=+prompt("Enter radius of circle");
calcCirumference(radius);
calcArea(radius);

//Chapter 38-42
//Task 01
function power(a,b){
return a**b;
}

//Task 02
function isLeapYear(year){
if(year%4==0){
document.write("leap year");
}
else{
document.write("not leap year");
}
}

//Task 03
function triangleArea(a,b,c){
var S=calculateS(a,b,c);
var area=S*(S-a)*(S-b)*(S-c);
document.write("<br>Area of triangle is ",area);
}

function calculateS(a,b,c){
return (a+b+c)/2;
}

//Task 04
function average(a,b,c){
return (a+b+c)/3;
}

function percentage(a,b,c){
return ((a+b+c)/300)*100;
}

function mainFunction(sub1,sub2,sub3){
var avg=average(sub1,sub2,sub3);
var perc=percentage(sub1,sub2,sub3);
document.write("<br>Percentage = ",perc);
document.write("<br>Average = ",avg);
}

//Task 05
function index(str,ch){
for(i=0;i<str.length;i++){
if(str[i]==ch){
    console.log(i);
    break;
}
}
}

//Task 06
function deleteVowels(str){
str=str.toLowerCase();
for(i=0;i<str.length;i++){
if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
    str=str.replace(str[i],"");
}
}
console.log(str);
}

//Task 07
function countVowels(str){
var count=0;
for(i=0;i<str.length-1;i++){
if(isVowel(str[i]) && isVowel(str[i+1])){
    count++;
}
}
console.log("Number of Successive vowels occurence are "+count); 
}

function isVowel(ch){
ch=ch.toLowerCase();
switch(ch){
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
    return true;
default:
    return false;
}
}

//Task 08
function convertToMeters(dist){
dist=dist*1000;
document.write("Distance in meters: ",dist);
}

function convertToFeets(dist){
dist=convertToMeters(dist)*3.280839895;
document.write("Distance in feets: ",dist);
}

function convertToInches(dist){
dist=convertToMeters(dist)*39.37007874;
document.write("Distance in inches: ",dist);
}

function convertToCentimeters(dist){
dist=convertToMeters(dist)*100;
document.write("Distance in centimeters: ",dist);
}

//Task 09
function calculateOvertime(totalHours){
var overTimeHours=totalHours-40;
var overTime=overTimeHours*12;
document.write("Total Overtime pay is "+overTime);
}

//Task 10
function notes(){
var amount=+prompt("Enter amount to withdraw");
var hundred=amount/100;
var fifty=(amount%100)/50;
var ten=((amount%100)%50)/10;
console.log("You will have "+Math.floor(hundred)+" hundred notes "+Math.floor(fifty)+" fifty notes and "+Math.floor(ten)+" ten notes");
} */

//Chapter 43-48

//Task 01
function showAlert(){
alert("Task 01 Completed");
}

//Task 02
function showImgAlert(){
alert("Thanks for purchasing a phone from us");
}

//Task 03
function deleteRecord(index){
document.getElementById("studentRecords").deleteRow(index);
}

//Task 04
function changeImg(id){
var img=document.getElementById("chngImg");
if(id==1){
img.src="https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiMi9-b.jpg";
img.alt="XiaomiMi9-b"
}
else{
img.src="https://www.whatmobile.com.pk/admin/images/Tecno/TecnoCamon15Pro-b.jpg";
img.alt="TecnoCamon15Pro-b";
}
}

//Task 05

var countP=document.getElementById("counter");
var value=countP.nodeValue;
function increaseCounter(){
value++;
countP.innerHTML=value;    
}
function decreaseCounter(){
value--;
countP.innerHTML=value;    
}


//Chapter 49-52

//Task 01
function displayData(){
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var fnameP=document.getElementById("fnameP");
var lnameP=document.getElementById("lnameP");
var emailP=document.getElementById("emailP");
fnameP.innerHTML="First Name: "+fname.value;
lnameP.innerHTML="Last Name: "+lname.value;
emailP.innerHTML="Email: "+email.value;
}

//Task 02
function readMore(){
var read=document.getElementById("read");
read.innerHTML="Samsung Galaxy S20 is powered by a 2GHz octa-core Samsung Exynos 990 processor that features 2 cores clocked at 2.73GHz, 2 cores clocked at 2.5GHz and 4 cores clocked at 2GHz. It comes with 8GB of RAM. The Samsung Galaxy S20 runs Android 10 and is powered by a 4000mAh non-removable battery."
}

//Task 03
var table=document.getElementById("tableData");
var index;

function displayTable(){  
var name=document.getElementById("name");
var classes=document.getElementById("class");
var row=table.insertRow();
var cell1=row.insertCell();
var cell2=row.insertCell();
var cell3=row.insertCell();
var cell4=row.insertCell();
cell1.innerHTML=name.value;
cell2.innerHTML=classes.value;
cell3.innerHTML="<button onclick='editData(this)'>Edit</button>";
cell4.innerHTML="<button onclick='deleteData(this)'>Delete</button>";
name.value="";
classes.value="";
}

function editData(e){ 
var ind=e.parentNode.parentNode.rowIndex;
showForm(ind);
}

function deleteData(e){
var ind=e.parentNode.parentNode.rowIndex;
table.deleteRow(ind);
}

function showForm(indexNum){
on();
var name=document.getElementById("uname");
var classes=document.getElementById("uclass");
name.value=table.rows[indexNum].cells[0].innerHTML;
classes.value=table.rows[indexNum].cells[1].innerHTML;
index=indexNum;
}

function on() {
document.getElementById("overlay").style.display = "block";
}

function off() {
document.getElementById("overlay").style.display = "none";
}

function updateTable(){
var name=document.getElementById("uname");
var classes=document.getElementById("uclass");
table.rows[index].cells[0].innerHTML=name.value;
table.rows[index].cells[1].innerHTML=classes.value;
off();
}

//Chapter 53-58
//Task 01

var arr=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.png','images/5.jpg','images/6.jpg','images/7.png','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg','images/12.jpg','images/13.jpg','images/14.png','images/15.jpg']

var modal=document.getElementById("modal");
var modalContent=document.getElementById("modal-img");
var imgDiv=document.getElementById('images');
for(i=0;i<arr.length;i++){
imgDiv.innerHTML+="<img class='format' onclick='modalOpen(this)' src='"+arr[i]+"'>";
}

function modalOpen(path){
modal.classList.remove("model-close");
modal.classList.add("model-open");
modal.style.display="block";
modalContent.src=path.src;
}

function onClosedImagModal(){
modal.classList.remove("model-open");
modal.classList.add("modal-close");
setTimeout(()=>{ modal.style.display = "none"; }, 500)
}

//Task 02
var para=document.getElementById("para");
function zoomIn(){
var fontSize=parseFloat(window.getComputedStyle(para, null).getPropertyValue('font-size'));
para.style.fontSize=fontSize+10+'px';
}

function zoomOut(){
var fontSize=parseFloat(window.getComputedStyle(para, null).getPropertyValue('font-size'));
para.style.fontSize=fontSize-10+'px';
}

//Chapter 58-67

//Task 01
// i
var main=document.getElementById("main-content");

// ii
console.log(main.childNodes);

// iii
var classElements=document.getElementsByClassName("render");
for(i=0;i<classElements.length;i++){
console.log(classElements[i].innerHTML);
}

// iv
var firstName=document.getElementById("first-name");
firstName.value="Muhammad Asad";

// v
var lastName=document.getElementById("last-name");
var emailId=document.getElementById("email-id");
lastName.value="Khan";
emailId.value="masad94@hotmail.com"

//Task 02
// i
var form=document.getElementById("form-content");
console.log("form-content Node Type: "+form.nodeType);

// ii
var element=document.getElementById("lastName");
console.log("lastName Node Type: "+element.nodeType);
for(i=0;i<element.childNodes.length;i++)
console.log("lastName Child Node Type: "+element.childNodes[i].nodeType);

// iii
element.childNodes[0].textContent="Hello World";

// iv
console.log("main-content 1st Child: "+main.firstChild);
console.log("main-content last Child: "+main.lastChild);

// v
console.log("next sibling of lastName: "+element.nextSibling);
console.log("previous sibling of lastName: "+element.previousSibling);

// vi
console.log("Parent node of email: "+emailId.parentNode);
console.log("Node type of email: "+emailId.nodeType);
