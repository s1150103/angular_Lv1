import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todos } from './todos/todos';
import { TodoDetail } from './todo-detail/todo-detail';
import { TodoAdd } from './todo-add/todo-add';
import { TodoEdit } from './todo-edit/todo-edit';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: Todos },
  { path: 'detail/:id', component: TodoDetail },
  { path: 'add', component: TodoAdd },
  { path: 'edit/:id', component: TodoEdit },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
