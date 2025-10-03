
// let mystery1 = "Hello" + 5;
// let mystery2 = "10" - 5;
// let mystery3 = true + 1;

// console.log(mystery1);
// console.log(mystery2);
// console.log(mystery3);

// let firstName ="kamal thara";
// let age =28;
// let isstudent = false;
// let favoriteColor="blue"
//-----------------4-----------------
// let info = "Hi! I'm" + firstName +"I'm "+ age + "years old.";

// console.log(info)

//fullName= "kamaleshwaran Tharani";
//------------5--------------------
//p1
//let uName = fullName.toUpperCase()
//console.log(uName)
//p2
//let t=fullName.silce(0,4)
//console.log(t)
//p3
//console.log(fullName.length)
//p4
//let age1= 24
//let username=fullName.slice(0.3)+age1
//console.log(userName);
//--------------6-------------------
//function add(a, b) {
  //return a + b;
//}
//console.log(add(5, 3)); 

//---------7------

// Bug Hunt #1
//function greetUser(name) {
  //return "Hello " + name;
//}

// Bug Hunt #2
//function calculateArea(length, width){
  //return length * width
//}
//---------------8----------

// let todoList = ["Learn JavaScript", "Practice coding"];
// console.log("my Name:", todoList);
// todoList.push("Build a project");
// console.log(todoList);
// todoList.pop();
// console.log(todoList);

//----------9----------
// let movise = ["Inception", "Avatar", "Titanic", "Matrix"];
// let numbers = [1, 2, 3, 4, 5];

// Challenge 1: Double all numbers
// Challenge 2: Find movies with 'a' in the name
// Challenge 3: Get total length of all movie names
 
// let dobledNumber = numbers.map(num =>num*2);
// console.log(dobledNumber);

// console.log(movise.filter (movie=> movie.toLowerCase().includes('a')));
 

// let totalLength = movise
//   .map(movie => movie.length)
//   .reduce((acc,len)=>acc + len , 0);

//   console.log(totalLength);

//-----------10---------------

// let score = [45,67,80,90,55,78]
// function CalculateGrade(score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else  if(score >= 70) {
//     return "C";
//   }else if (score >= 60){
//     return "D"
//   }else if (score >= 50){
//     return "E"
//   }else  {
//     return "F"
//   }
// }
// function CalculateAverage(score){
//   if(!Array.isArray(score) ||score.length === 0){
//     return "Invaid:provide a non-empty array of scores";
//   } 
//     let sum = 0;
//     for (let s of score){
//       if (typeof s !== "number" || S < 0 || s >100){
//         return "Invaild score found in class list";
//       }
//       sum +=s
//     }
//     return sum / score.length;
// }
//     console.log(CalculateAverage(scores));

// function gradeMeaning(letter){
//   switch (letter) {
//     case "A":
//       return "Excellent";
//     case "B":
//       return "Good";
//     case "C":
//       return "Average";
//     case "D":
//       return "Poor";
//     case "E":
//       return "Fail";
//     default:
//       return "Unknown grade";
//   }
// }
// for (let s of score){
//   let grade =  CalculateGrade(s);
//   console.log(`Score: ${s}, Grade: ${grade}, Meaning: ${gradeMeaning(grade)}`);
// }

// console.log("Class  Average:", CalculateAverage(scores));

//---------------11----------------
// for (let i = 1;i <=5;i++){
  
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "❤️";
//   }
//   console.log(stars);
// }
// for (let i=5;i>=1;i--){
//   let stars="";
//   for(let j=1;j<=i;j++){
//     stars+="❤️"
//   }
//   console.log(stars)
// }
// for (let i = 0 ; i<=5;i++){
//   let line="";
//   for (let j = 1; j <=i; j++){
//     line += j +" ";
//   }
//   console.log(line);
// }
//-------------------12------------------
//--------------dom----------------

// function changeTitle() {
//   document.getElementById("demo-text").innerHTML = "JavaScript is awesome!";
// }

//    // Change the title text
//    function changeTitle() {
//     document.getElementById("page-title").innerHTML = "JavaScript is Awesome!";
//   }

//   // Change background and text colors randomly
//   function changeColors() {
//     let colors = ["#ff9999", "#99ccff", "#99ff99", "#ffff99", "#ffccff"];
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor;

//     // Change text color for contrast
//     let textColors = ["#000000", "#333333", "#660066", "#003366"];
//     document.body.style.color = textColors[Math.floor(Math.random() * textColors.length)];
//   }

//   // Add an extra message below
//   function addMessage() {
//     let p = document.createElement("p");
//     p.textContent = "✨i love my family!";
//     document.body.appendChild(p);
//}



  
//-----------a----------
// generatname("thara")

// function generatname(name){
//   console.log(name);
// }

// generat("thara",28)

// function generat(name,age){
// console.log(name+age)
// }


//---------a1-------

// numbers=[1,2,3,4,5,6]
// for(let i=0 ;i < numbers.length; i++){
//   const element = [i]
// }
// console.log(numbers)

// numbers.forEach (number =>{
// console.log(number)
// });

//----------a2-----------while

// numbers[10,20,30,40,50]
// let i=0;
// // while(i<numbers.length){
//   console.log(i);
//   i++
//}
// numbers=[10,20,30,40,50]
// let i=0
// // while(i<numbers.length){
// //   console.log(numbers[i]);
// // i++
// // }

// do {
//   console.log(i),
//   console.log(numbers[i])
//   i++
// } while(i<numbers.length)

//----------------DOM-----------
// const profileDiv = document.getElementById("profile");
// const greeting = document.getElementById("greeting");
// const profileImg = document.getElementById("profileImg");



     
// const colors = ["#ffb3ba", "#baffc9", "#bae1ff", "#ffffba", "#ffcba4"];

// document.getElementById("showBtn").addEventListener("click", () => {
//   profileDiv.style.display = "block";
//   profileImg.src = images[Math.floor(Math.random() * images.length)];
//   greeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];
// });

// document.getElementById("colorBtn").addEventListener("click", () => {
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   profileDiv.style.backgroundColor = randomColor;
// });

// document.getElementById("greetBtn").addEventListener("click", () => {
 // greeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];
//});


//========15=========//

// p1
// let name ="john"
// console.log(name);

//p2
let number =10
function isEven(number){
  return number % 2 === 1;
}
console.log(number)


// p3
// console.log(userName);
// let userName = "Alice";
// console.log(userName);

