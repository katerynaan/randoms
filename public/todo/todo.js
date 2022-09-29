import ToDoForm from './todoForm.js';

export const todosList = document.getElementsByClassName('todos-list_toDo')[0];
export const doneList = document.getElementsByClassName('todos-list_done')[0];
const todoForm = document.getElementsByClassName('todos-form')[0];

new ToDoForm(todoForm);
