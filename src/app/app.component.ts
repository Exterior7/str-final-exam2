import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<Todo[]> = this.todoService.getAll();

  phrase: string = '';

  key: string = 'title';

  selectedTodo: Todo = new Todo();

  columnkey: string = '';

  constructor(
    private todoService: TodoService,
  ) {}

    onDelete(todo: Todo):void {
     if(confirm('Are you sure?')) {
       this.todoService.remove(todo).subscribe(
       () => this.todos$ = this.todoService.getAll())


     }
    }

    onChangePhrase(event: Event):void {
      this.phrase = (event.target as HTMLInputElement).value;
      // this.phrase = event.target.value
    }


    onSort() {
      this.columnkey = 'id';
    }

    onCheckbox(todo: Todo):void {
      todo.active = !todo.active
      this.todoService.update(todo).subscribe()
    }
}
