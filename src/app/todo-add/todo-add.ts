import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css',
})
export class TodoAdd {
  todo: Todo = { id: 0, title: '', description: '' };

  constructor(
    private todoService: TodoService,
    private location: Location,
  ) {}

  save(): void {
    if (!this.todo.title.trim() || !this.todo.description.trim()) {
      return;
    }
    this.todoService.addTodo(this.todo).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
