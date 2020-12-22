// first a prompt loop that will ask what would you like to do
// make a quit app loop


//view current to do list


//make a loop for when "new" is typed to prompt enter todo list
//create an array that will push input into array

//pop/unshift or whatever when "delete" is the input

const quit = "quit";
const list= "list";
let toDoList = ["do laundry","run dishes", "lift weights", "braid hair"];

let action = prompt("What would you like to do?");

const promptQuestion = document.querySelector('#prompt');

promptQuestion.addEventListener('click', function() {
    action = prompt("What would you like to do?");
    runLoop();
})

runLoop();


function runLoop() {
    while(action !== quit) {

    if (action === list) {
        paintList();
        break;
        
    }

    if (action === "new") {
        let newToDo = prompt("Add a new ToDo to list");
        toDoList.push(newToDo);
        console.log(toDoList);
        paintList();
        break;
        
    }

    if (action === "delete") {
        let itemToDelete = prompt("Which item number would you like to delete?");
        toDoList.splice(itemToDelete-1,1);
        paintList();
        break;
    }

    action = prompt("What would you like to do?");

    }




}
console.log("Exit To Do List");


function paintList() {
    $("#newList").empty();

        for (let i=0; i < toDoList.length; i++) {
            console.log(toDoList[i]);


        let newToDoItem = `<li id="item-${i+1}" class="toDoItem">${toDoList[i]}</li>`;
        $("#newList").append(newToDoItem);

        };


}









