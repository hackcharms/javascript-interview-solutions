import { TodoType, useStorage } from './storage/todo';
import './style.css'
import { Todo, getTodoInputElement, getTodoInputFormElement } from './ui/todo';
export const TODO_SELECTOR = "#todos";
export const TODO_LIST_SELECTOR = "#todos #todo-list";
export const TODO_INPUT_FORM_SELECTOR = "#todos #input-form";
export const TODO_INPUT_SELECTOR = "#todos #input-form #todo-input";
export const TODO_SEARCH_INPUT_SELECTOR = "#search-input";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <nav class="navbar">
      <h1>My navbar</h1>
      <ul class="nav-link">
        <li><a href="#">Home</a></li>
        <li><a href="#">Tasks</a></li>
      </ul>
    </nav>
    <main class="main-wrapper">
      <h2>Tasks</h2>
      <div id="todos">
      <input type="text" id="search-input" placeholder="Search your Todo"/>
        <form id="input-form" action="">
        <div class="input-warpper">
          <input type="text" name="todo_name" id="todo-input" placeholder="Enter your Todo"/>
          <button type="submit" class="btn success">Add</button>
          </div>
        </form>
        <div id="todo-list">
        </div>
      </div>
    </main>
    <footer class="footer-wrapper">
      <p>
        My footer is here
      </p>
    </footer>
`;
const TodoStorage = useStorage();
const inputFormElement = getTodoInputFormElement()
inputFormElement?.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  const input = getTodoInputElement();
  if (!input) return;
  TodoStorage.add({ title: input.value.trim() });
  input.value=''
  renderTask(TodoStorage.todos);
});
const serachInputElement=document.querySelector<HTMLInputElement>(TODO_SEARCH_INPUT_SELECTOR);
serachInputElement?.addEventListener('input',(event)=>{
  const key=(event.target as HTMLInputElement).value.trim();
  const todos=filterTodo(key)
  renderTask(todos);
})
function filterTodo(text:string){
    return TodoStorage.todos.filter(({title})=>title.toLowerCase().includes(text.toLowerCase()));
}
function renderTask(tasks: TodoType[]) {
  const todo_list = document.querySelector(TODO_LIST_SELECTOR);
  if (!todo_list) return;
  todo_list.innerHTML = "";
  const fragment = new DocumentFragment();
  for (let task of tasks) {
    const taskElement = Todo({
      ...task,
      onTitleCick:() => {
        TodoStorage.update(task.id, { status: "completed" });
        renderTask(TodoStorage.todos);
      },
      onDelete:() => {
        TodoStorage.update(task.id, { status: "canceled" });
        renderTask(TodoStorage.todos);
      }
    });    
    fragment.append(taskElement);
  }
  todo_list?.append(fragment);
}
renderTask(TodoStorage.todos);

