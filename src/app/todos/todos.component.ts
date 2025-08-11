import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  private routerSubscription: Subscription = new Subscription();

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTodos();
    
    // Listen for navigation events to refresh data
    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/todos' || event.url === '/') {
          this.getTodos();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todoService.deleteTodo(todo.id).subscribe();
  }
}
