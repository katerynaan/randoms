class TodoItem {
  constructor(root, data, doneList) {
    this.root = root;
    this.data = data;
    this.doneList = doneList;
    this.render();
  }
  render() {
    const todo = document.createElement('div');
    todo.className = 'todo-item';
    todo.id = this.data.id;
    this.renderData(todo);
    this.renderDone(todo);
    this.renderDelete(todo);
    this.root.append(todo);
  }
  renderData(todo) {
    const { title, description } = this.data;
    const titleElement = document.createElement('h3');
    titleElement.className = 'todo-title';
    titleElement.textContent = title;
    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'todo-description';
    descriptionElement.textContent = description;
    todo.append(titleElement, descriptionElement);
  }
  renderDone(todo) {
    const done = document.createElement('input');
    done.className = 'todo-radio';
    done.type = 'radio';
    done.name = 'done';
    done.checked = false;
    done.addEventListener('change', () => {
      this.deleteInstance(done);
      this.doneList.append(todo);
    });
    todo.append(done);
  }
  renderDelete(todo) {
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-delete-btn';
    deleteBtn.textContent = 'Delete';
    this.deleteInstance(deleteBtn, true);
    todo.append(deleteBtn);
  }
  deleteInstance(element, forGood) {
    element.addEventListener('click', () => {
      const currentIntance = document.getElementById(this.data.id);
      currentIntance.remove();
      if (!forGood) this.doneList.append(currentIntance);
    });
  }
}

export default TodoItem;
