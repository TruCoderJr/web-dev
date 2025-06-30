const { log } = require('console');
let readlineSync = require('readline-sync');

let toDo=[];

let req=readlineSync.question("Enter your request: 'add, delete, list, quit'");
while(req!="quit"){
  if(req=="add"){
    let task=readlineSync.question("Enter the task you want to add: ");
    toDo.push(task);
    console.log("Task added");
  }
    else if (req === "list") {
      for (let i = 0; i < toDo.length; i++) { // i is declared here
        console.log(i, toDo[i]);
      }
    }else if(req=="delete"){
    let idx=readlineSync.question("Enter the index of the task you want to delete: ");
    toDo.splice(idx,1);
      console.log("task deleted");
  }
  else{
  console.log("you enter invalid statement");
}
  req=readlineSync.question("Enter your request: 'add, delete, list, quit'");
}
console.log("Thank you for using the app");









