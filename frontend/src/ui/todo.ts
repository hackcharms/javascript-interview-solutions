/** @format */

import { TODO_INPUT_FORM_SELECTOR, TODO_INPUT_SELECTOR, TODO_LIST_SELECTOR, TODO_SELECTOR } from "../main";
import { TodoType } from "../storage/todo";
type AttrsType = Partial<
    Record<`on${keyof GlobalEventHandlersEventMap}`|string, Function|string>>;
type TodoPropsType = {
  attrs: AttrsType;
  titleAttrs: AttrsType;
  cancelAttrs: AttrsType;
};
export function serializeHtmlAttrs(attrs: AttrsType) {
  return Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
}
export function Todo({ id,title,status="todo", titleAttrs = {}, cancelAttrs = {} }: Partial<TodoPropsType> & TodoType) {
    const item = document.createElement('div');
    item.setAttribute('class','item')
    item.setAttribute("id", `todo-item-${id}`);
    item.innerHTML = `
        <button ${serializeHtmlAttrs(
          titleAttrs
        )} class="title ${status}">${title}</button>
        <button ${serializeHtmlAttrs(
          cancelAttrs
        )} class="cancel">cancel</button>
    `;
    return item;
    
}
export function getTodosElement() {
  return document.querySelector(TODO_SELECTOR);
}
export function getTodoListElement() {
  return document.querySelector(TODO_LIST_SELECTOR);
}
export function getTodoInputFormElement() {
  return document.querySelector(TODO_INPUT_FORM_SELECTOR);
}
export function getTodoInputElement() {
  return document.querySelector(TODO_INPUT_SELECTOR);
}
export function getTodoItemElement(id: string | number) {
  return document.querySelector(TODO_LIST_SELECTOR + `#${id}`);
}
