////////////////////////////////////////////////////////////NUMBER TASK/////////////////////////////////////////////////////////////
//__________________________________________________________TASK 1_____________________________________________________________________

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

//_______________________________________________________TASK 2______________________________________________________________________

// let i = 0;
// let newStudent 
// do {
//   newStudent = prompt("Enter the name of the new student!");
//   newStudent = newStudent.trim();
//   alert(`welcome ${newStudent}`);
//   i++;
// } while (i <3 && newStudent);

//_________________________________________________________TASK 3________________________________________________________________________

// let count =0 
// for (let i =0;i<=100;i++){
// count+=i
// }
// alert(count)

//______________________________________________________TASK 4_________________________________________________________________________

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


//_______________________________________________________TASK 5______________________________________________________________________________________

// let clientName ='igor'
// let discount =0
// let clientSpentForAllTime =110
// let clientSpentToday=25
// clientSpentForAllTime+=clientSpentToday;
// if(clientSpentForAllTime>100 &&  clientSpentForAllTime <300) discount=10
// if(clientSpentForAllTime>300 && clientSpentForAllTime <500) discount=20
// if(500< clientSpentForAllTime) discount=30

// alert(`You are given a discount in
// ${discount}%!” `)
// alert(`Thank you, ${clientName}! Payable ${clientSpentToday}$. For all the time in our restaurant you
//     spent ${clientSpentForAllTime}$.`)

//_________________________________________________________TASK 6______________________________________________________________________________________
// let discount = 0
// let clientSpentToday = ""
// let clientSpentForAllTime = ""
// let clientName = prompt('“Enter the clients name”,')
// do {
//     clientSpentToday = +prompt("“How much did the client spend today?”,")

// }
// while (isNaN(clientSpentToday))

// do {
//     clientSpentForAllTime = +prompt("“How much did the client spend all time?”.")

// }
// while (isNaN(clientSpentForAllTime))

// clientSpentForAllTime += clientSpentToday;
// if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) discount = 10
// if (clientSpentForAllTime > 300 && clientSpentForAllTime < 500) discount = 20
// if (500 < clientSpentForAllTime) discount = 30

// alert(`Thank you, ${clientName}! Payable ${clientSpentToday}$. For all the time in our restaurant you spent ${clientSpentForAllTime}$.and your discount ${discount}%`)

////////////////////////////////////////////////////////////Array TASK/////////////////////////////////////////////////////////////

//_________________________________________________________TASK 1______________________________________________________________________________________

// let number = +prompt("enter number")
// let getSumOfSequence = (number) => {
//     let sum = 0
//     let arr = []
//     for (let i = 1; i <= number; i++) {
//         arr.push(i)
//         sum += i
//     }
//     alert(`your array:${arr} , your sum:${sum}`)
// }
// getSumOfSequence(number)

//_________________________________________________________TASK 2______________________________________________________________________________________
// const peopleWaiting = ['Kristina', 'Oleg', 'Kirill', 'Maria', 'Svetlana', 'Artem', 'Gleb'];

// let giveParcel = () => {
//     let name= peopleWaiting.shift();
//     alert(`${name} received the package. There are ${peopleWaiting.length} people left in the queue.`);
// }

// let leaveQueueWithoutParcel =()=>{
//     let name = peopleWaiting.pop()
//     alert(`${name} did not received the package. There are ${peopleWaiting.length} people left in the queue.`);

// }
// giveParcel();
// giveParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// giveParcel();

//_________________________________________________________TASK 3______________________________________________________________________________________

// FOR LOOP
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]**3;
// }
//  console.log(sum);



// // FOR OF LOOP
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;
// for (let num of numbers) {
//   sum += num**3;
// }
// console.log(sum);


// // FOR EACH METHOD
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;
// numbers.forEach((num) => {
//   sum +=num**3;
// });
// console.log(sum);


// // REDUCE METHOD
// const numbers = [10, 4, 100, -5, 54, 2];
// const sum = numbers.reduce((acc, num) => {
//   return acc +num**3;
// }, 0);
// console.log(sum);
//_________________________________________________________TASK 4______________________________________________________________________________________

// const coffees = ["Latte", "Cappuccino", "Americano"];
// let coffeeName = prompt("Search coffee by name:");
// let index = coffees.findIndex((coffee) => coffee.toLowerCase() === coffeeName.toLowerCase());

// if (index !== -1) {
//     let coffee = coffees[index];
//     alert(`Keep your favorite coffee ${coffee}. It is ${index + 1}-th most popular in our coffee shop.`);
// } else {
//   alert("Unfortunately, this type of coffee is not available");
// }
//_________________________________________________________TASK 5______________________________________________________________________________________

// const coffees = ["Latte", "Cappuccino", "Americano"];
// const prices = [1.5, 1, 2];
// const updatedPrices = prices.map((price) => price + 0.5);
// coffees.forEach((coffee, index) => {
//   alert(`${coffee} is now worth ${ updatedPrices[index]} euro`);
// });
//_________________________________________________________TASK 6______________________________________________________________________________________

// let clientsEstimations = [];
// let estimation = ""
// let rate = () => {
//     do {
//         estimation = +prompt("How do you rate our coffee shop from 1 to 10?");
//     }
//     while (isNaN(estimation))
//     if (estimation >= 1 && estimation <= 10) clientsEstimations.push(estimation)
// }
// rate()
// rate()
// rate()
// rate()
// let goodEstimations = clientsEstimations.filter((x) => x > 5).length;
// let notGoodEstimations = clientsEstimations.filter((x) => x <= 5).length;
// alert(
//     `Total positive estimates: ${goodEstimations}; Total negative ratings: ${notGoodEstimations}`
// );
//_________________________________________________________TASK 7______________________________________________________________________________________

// let goals = [8, 1, 1, 3, 2, -1, 5];

// let maxGoals = Math.max(...goals.filter(goal => goal >= 0));
// let maxIndexes = goals.reduce((acc, cur, i) => (cur === maxGoals ? acc.concat(i) : acc), []);
// let maxIndexesStr = maxIndexes.join(", ");
// alert(`The most scoring match was at number ${maxIndexesStr}. There were ${maxGoals} goals scored in it.`);
// let minGoals = Math.min(...goals.filter(goal => goal >= 0));
// let minIndexes = goals.reduce((acc, cur, i) => (cur === minGoals ? acc.concat(i) : acc), []);
// let minIndexesStr = minIndexes.join(", ");
// alert(`The most unsuccessful matches were under the numbers ${minIndexesStr}. In each of them, ${minGoals} ball(s) were scored.`);
// let totalGoals = goals.reduce((acc, cur) => (cur >= 0 ? acc + cur : acc), 0);
// alert(`The total number of goals for the season is equal to ${totalGoals}`);
// let hasDefeats = goals.some(goal => goal < 0);
// alert(`There were automatic defeats: ${hasDefeats ? "yes" : "no"}`);
// let avgGoals = totalGoals / goals.filter(goal => goal >= 0).length;
// alert(`The average number of goals per match is equal to ${avgGoals}`);
// let sortedGoals = goals.slice().sort((a, b) => a - b);
// let sortedGoalsStr = sortedGoals.join(", ");
// alert(`Sorted goals: ${sortedGoalsStr}`);


////////////////////////////////////////////////////////////FUNCTION TASK/////////////////////////////////////////////////////////////

//_________________________________________________________TASK 1______________________________________________________________________________________

// function getName1(){
//     return console.log('Declartiton')
// }
// let getName2 = function (){
//     return console.log('Expression')
// }
// let getName3 =()=>{
//     return console.log('arrow')
// }

// getName1();
// getName2();
// getName3();

//_________________________________________________________TASK 2______________________________________________________________________________________

// let getSumOfNumbers = (number, type) => {
//     let sum = 0
//     if (type == "even") {
//         for (let i = 0; i <= number; i++) {
//             if (i % 2 == 0) sum+=i

//         }
//     }
//     if (type == "odd") {
//         for (let i = 0; i <= number; i++) {
//             if (i % 2 == 1) sum+=i
//         }
//     }
//     if (type == '') {
//         for (let i = 0; i <= number; i++) {
//             sum+=i
//         }
//     }
//     alert(sum)
// }

// getSumOfNumbers(10,'')
//_________________________________________________________TASK 3______________________________________________________________________________________

// let getDivisors =(number)=>{
// if(number>0 && Number.isInteger(number)){
//     for(let i=1;i<=number;i++){
//         if(number%i==0) console.log(i);
//     }
// 
// }
// getDivisors(100)

//_________________________________________________________TASK 4______________________________________________________________________________________

// let checkQuestionAnswer=(question,correctAnswer)=>{
// let useransewer=prompt(question)
// if(useransewer==correctAnswer) alert("“The answer is correct”,")
// else alert("“The answer is incorrect”,")
// }
// checkQuestionAnswer('Is the watermelon a fruit or a berry','A berry');
// checkQuestionAnswer('How many teeth does an average adult have', '32');
// checkQuestionAnswer('What is the name of the smallest bird in the world','Humming')


