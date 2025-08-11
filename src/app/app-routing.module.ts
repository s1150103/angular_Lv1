import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: 'add', component: TodoAddComponent },
  { path: 'edit/:id', component: TodoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }