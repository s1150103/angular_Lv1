import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mockTodos: Todo[] = [
    { id: 1, title: '買い物', description: '牛乳とパンを買う' },
    { id: 2, title: '掃除', description: 'リビングの掃除をする' },
    { id: 3, title: '勉強', description: 'Angularチュートリアルを完了する' },
    { id: 4, title: '運動', description: '30分ジョギングする' },
    { id: 5, title: '読書', description: 'プログラミング本を1章読む' },
  ];

  constructor() {}

  getTodos(): Observable<Todo[]> {
    return of([...this.mockTodos]);
  }

  getTodo(id: number): Observable<Todo> {
    const todo = this.mockTodos.find(t => t.id === id);
    return of(todo!);
  }

  updateTodo(todo: Todo): Observable<any> {
    const index = this.mockTodos.findIndex(t => t.id === todo.id);
    if (index > -1) {
      this.mockTodos[index] = todo;
    }
    return of(todo);
  }

  addTodo(todo: Todo): Observable<Todo> {
    const newId = this.mockTodos.length > 0 ? Math.max(...this.mockTodos.map(t => t.id)) + 1 : 1;
    const newTodo = { ...todo, id: newId };
    this.mockTodos.push(newTodo);
    return of(newTodo);
  }

  deleteTodo(id: number): Observable<Todo> {
    const index = this.mockTodos.findIndex(t => t.id === id);
    let deletedTodo: Todo | undefined;
    
    if (index > -1) {
      deletedTodo = this.mockTodos.splice(index, 1)[0];
    }
    
    return of(deletedTodo!);
  }

  searchTodos(term: string): Observable<Todo[]> {
    if (!term.trim()) {
      return of([]);
    }
    const results = this.mockTodos.filter(todo => 
      todo.title.toLowerCase().includes(term.toLowerCase()) ||
      todo.description.toLowerCase().includes(term.toLowerCase())
    );
    
    return of(results);
  }
}