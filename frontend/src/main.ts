import { TodoType, useStorage } from './storage/todo';
import './style.css'
import typescriptLogo from './typescript.svg'
import { Todo } from './ui/todo';
import { uuid } from './utils';
import viteLogo from '/vite.svg'
export const TODO_SELECTOR = "#todos";
export const TODO_LIST_SELECTOR = "#todos #todo-list";
export const TODO_INPUT_FORM_SELECTOR = "#todos #input-form";
export const TODO_INPUT_SELECTOR = "#todos #input-form #todo-input";

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
        <form id="input-form" action="">
          <input type="text" name="todo_name" id="todo-input" placeholder="Enter your Todo"/>
        </form>
        <div id="todo-list">
          <!-- <div class="item">
            <button class="title">todo name</button>
            <button class="cancel">cancel</button>
          </div> -->
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
const inputFormElement = document.querySelector<HTMLFormElement>(TODO_INPUT_FORM_SELECTOR);
inputFormElement?.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  const input = document.querySelector<HTMLInputElement>(TODO_INPUT_SELECTOR);
  if (!input) return;
  TodoStorage.add({ title: input.value });
  input.value=''
  renderTask(TodoStorage.todos);
});
function renderTask(tasks: TodoType[]) {
  const todo_list = document.querySelector(TODO_LIST_SELECTOR);
  if (!todo_list) return;
  todo_list.innerHTML = "";
  const fragment = new DocumentFragment();
  for (let task of tasks) {
    const taskElement = Todo({
      ...task, cancelAttrs: {
      }
    });
    taskElement
      .querySelector(".title")
      ?.addEventListener("click", (event: Event) => {
        TodoStorage.update(task.id, { status: "completed" });
        renderTask(TodoStorage.todos);
      });
    taskElement
      .querySelector(".cancel")
      ?.addEventListener("click", (event: Event) => {
        TodoStorage.update(task.id, { status: "canceled" });
        renderTask(TodoStorage.todos);
      });
    fragment.append(taskElement);
  }
  todo_list?.append(fragment);
}
renderTask(TodoStorage.todos);

