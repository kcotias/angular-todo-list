import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list';
import { TodoService } from './shared';
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
