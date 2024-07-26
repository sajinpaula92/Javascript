/*const todoList = [];

function addTodo() {

    const  inputElement =  document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

}*/

//second todo list:

const todoList1 = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {


let todoListHTML = '';

for(let i =0; i< todoList1.length; i++) {
   const todo = todoList1[i];
   const html = `<p> ${todo} <p/>`;
   todoListHTML += html;
}

console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

const todoList = [];

function addTodo() {

    const  inputElement =  document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}

//End of Arrays and Loops part 1



//Start of Arrays and Loops part 2
