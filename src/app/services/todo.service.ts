import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [{
    'id': 1,
    'title': 'Learn javacript'
  }, {
    'id': 2,
    'title': 'Learn Angular'
  },{
    'id':3,
    'title':'Implement Observable in Angular'
  }]
  constructor() { }

  public getTodoList(): any {
    const todoObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.todos);
      }, 1000);
    });

    return todoObservable;
  }
}
