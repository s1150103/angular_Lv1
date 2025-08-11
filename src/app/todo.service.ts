import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Todo } from './todo';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosUrl = 'api/todos';
  private mockTodos: Todo[] = [
    { id: 1, title: '買い物', description: '牛乳とパンを買う' },
    { id: 2, title: '掃除', description: 'リビングの掃除をする' },
    { id: 3, title: '勉強', description: 'Angularチュートリアルを完了する' },
    { id: 4, title: '運動', description: '30分ジョギングする' },
    { id: 5, title: '読書', description: 'プログラミング本を1章読む' },
  ];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  getTodos(): Observable<Todo[]> {
    this.log('fetched todos');
    return of([...this.mockTodos]);
  }

  getTodo(id: number): Observable<Todo> {
    const todo = this.mockTodos.find(t => t.id === id);
    this.log(`fetched todo id=${id}`);
    return of(todo!);
  }

  updateTodo(todo: Todo): Observable<any> {
    const index = this.mockTodos.findIndex(t => t.id === todo.id);
    if (index > -1) {
      this.mockTodos[index] = todo;
    }
    this.log(`updated todo id=${todo.id}`);
    return of(todo);
  }

  addTodo(todo: Todo): Observable<Todo> {
    const newId = this.mockTodos.length > 0 ? Math.max(...this.mockTodos.map(t => t.id)) + 1 : 1;
    const newTodo = { ...todo, id: newId };
    this.mockTodos.push(newTodo);
    this.log(`added todo w/ id=${newTodo.id}`);
    return of(newTodo);
  }

  deleteTodo(id: number): Observable<Todo> {
    const index = this.mockTodos.findIndex(t => t.id === id);
    let deletedTodo: Todo | undefined;
    
    if (index > -1) {
      deletedTodo = this.mockTodos.splice(index, 1)[0];
    }
    
    this.log(`deleted todo id=${id}`);
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
    
    results.length
      ? this.log(`found todos matching "${term}"`)
      : this.log(`no todos matching "${term}"`);
      
    return of(results);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('TodoService error:', error);
      console.log('Returning fallback result:', result);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }
}
