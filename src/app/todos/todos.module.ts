import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from './index';
import { TodoListComponent } from './todo-list/todo-list.component';
@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    TodoService
  ]

})
export class TodosModule { }
