import { Routes } from '@angular/router';

import { TodoListComponent } from './todo-list';

export const TodosRoutes: Routes = [
    {
        path: 'todos',
        redirectTo: 'todos/list'
    }
]