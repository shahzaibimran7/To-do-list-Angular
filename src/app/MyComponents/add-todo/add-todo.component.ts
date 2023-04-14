import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  onSubmit() {
    const todo = {
      sno: 8,
      isactive: true,
      title: this.title,
      desc: this.desc,
    };
    this.todoAdd.emit(todo);
  }
}
