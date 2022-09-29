import TodoItem from './totoItem.js';
import { todosList, doneList } from './todo.js';

class ToDoForm {
  constructor(root) {
    this.root = root;
    this.render();
  }
  render() {
    const title = document.createElement('input');
    title.type = 'text';
    const description = document.createElement('input');
    description.type = 'text';
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Add';
    submitBtn.addEventListener('click', () => {
      new TodoItem(
        todosList,
        {
          title: title.value,
          description: description.value,
          id: todosList.children.length + 1 + '',
        },
        doneList
      );
    });
    this.root.append(title, description, submitBtn);
  }
}

export default ToDoForm;
