//Task1

// let existsUserLogin="the_best_user"
// let existsUserPassword="12345678"

// let name =prompt("adi daxil edin")
// let password =prompt("parolu daxil edin")

// if(existsUserLogin===name && existsUserPassword===password){
//     alert("Welcome, userLogin!")
// }
// else{
//     alert("Login and (or) Passwordentered incorrectly.")
// }

///Task 2
// let i = 0;
// let newStudent 
// do {
//   newStudent = prompt("Enter the name of the new student!");
//   newStudent = newStudent.trim();
//   alert(`welcome ${newStudent}`);
//   i++;
// } while (i <3 && newStudent);

//TASK 3
// let count =0 
// for (let i =0;i<=100;i++){
// count+=i
// }
// alert(count)

//task 4
// let correct =0;
// let incorrectly =0
// let question1 = +prompt("Whats 2+2?")

// check(question1,4 );
// let question2 = +prompt("How much will 2 * 2 be?")
// check(question2 ,4)
// let question3 = +prompt("Petya had 5 apples. He ate 3 of them and gave 1 to a friend. How many apples does Peter have left?")
// check(question3 ,1)
// let question4 = +prompt(`Masha had 10 sweets. She ate 2 and gave 1 to a friend. After that, mom gave Masha 5 more sweets.
// How many sweets did Masha have left in the end?`)
// check(question4 ,12)
// let question5 = +prompt("What is 2 + 2 * 2?")
// check(question5 ,6)

// function check (a,b){
//     if(a==b){
//         alert("Correct answer")
//         correct++;
//         }
//         else{
//             alert("incorect")
//             incorrectly++
//         }
// }
// alert(`correct:${correct}  incorrect:${incorrectly}`)

//task5

let clientName ='igor'
let discount =0
let clientSpentForAllTime =110
let clientSpentToday=25
clientSpentForAllTime+=clientSpentToday;
if(100< clientSpentForAllTime <300) discount=10
if(300< clientSpentForAllTime <500) discount=20
if(500< clientSpentForAllTime) discount=30

alert(`You are given a discount in
${discount}%!” `)