import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      { id: 1, title: '買い物', description: '牛乳とパンを買う' },
      { id: 2, title: '掃除', description: 'リビングの掃除をする' },
      { id: 3, title: '勉強', description: 'Angularチュートリアルを完了する' },
      { id: 4, title: '運動', description: '30分ジョギングする' },
      { id: 5, title: '読書', description: 'プログラミング本を1章読む' },
    ];
    return { todos };
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  }
}
