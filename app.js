function addTodo(text){
    const newtodo ={
        text,
        completed: false
    };
    todos.push(newtodo);
    updateTodos();
}
function updateTodos(){
    list.innerHTML="";
    for(const todo of todos){
        const listElement = document.createElement('li');
        listElement.innerHTML = 
        `<span>${todo.text}</span>
        <div class="buttons">
            <button class="listbtn complete">Complete</button>
            <button class="listbtn delete">Delete</button>
        </div>    
        `;
        if(todo.completed){
            listElement.classList.add('completed');
        }
        list.appendChild(listElement);
    }
}

let todos = [];
const addButton = document.querySelector('.addbtn');
const list = document.querySelector('.todos');

addButton.addEventListener('click',()=>{
    const text = document.querySelector('.inputfield');
    if(text.value){
        console.log(text.value);
        addTodo(text.value);
        text.value='';
    }
    
});
list.addEventListener('click',(event)=>{
    if(event.target.classList.contains('complete')){
        const task = event.target.parentNode.parentNode;
        const index = Array.from(list.children).indexOf(task);
        todos[index].completed=true;
        updateTodos();
        console.log('Completed a todo');
    }
    if(event.target.classList.contains('delete')){
        const task = event.target.parentNode.parentNode;
        const index = Array.from(list.children).indexOf(task);
        todos.splice(index,1);
        console.log('Deleted Succesfully');
        updateTodos();
    }
});

