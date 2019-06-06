import { Injectable } from '@angular/core';
import { Todo } from './';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  listAll(): Todo[] {
    const todos = localStorage['todos'];
    return todos ? JSON.parse(todos) : [];
  }

  register(todo: Todo): void {
    const todos = this.listAll();
    todo.id = new Date().getTime();
    todos.push(todo);
    localStorage['todos'] = JSON.stringify(todos);
  }

  searchById(id: number): Todo {
    const todos: Todo[] = this.listAll();
    return todos.find(todo => todo.id === id);
  }

  update(todo: Todo): void {
    const todos: Todo[] = this.listAll();
    todos.forEach((obj, index, objs) => {
      if (todo.id === obj.id) {
        objs[index] = todo;
      }
    });
    localStorage['todos'] = JSON.stringify(todos)
  }

  remove(id: number): void {
    let todos: Todo[] = this.listAll();
    todos = todos.filter(todo => todo.id !== id);
    localStorage['todos'] = JSON.stringify(todos);
  }

  changeStatus(id: number): void {
    const todos: Todo[] = this.listAll();
    todos.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].finished = !obj.finished;
      }
    })
  }
}
