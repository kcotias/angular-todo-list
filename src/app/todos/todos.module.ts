import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from './index';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    TodoService
  ]

})
export class TodosModule { }
