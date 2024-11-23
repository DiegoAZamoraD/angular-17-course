import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TodoComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todoData1 = TODO_DATA[0]; 
  todoData2 = TODO_DATA[1]; 
  todoData3 = TODO_DATA[2]; 
  todoData4 = TODO_DATA[3]; 
  todoData5 = TODO_DATA[4]; 
  todoData6 = TODO_DATA[10];
  todoData = TODO_DATA;

  constructor(){
    console.log(this.todoData6)
  }
  getTodoInfo(val: boolean){
    console.log(val);
  }
  getTodoData(val: NTodo.TodoData){
    console.log(val)
  }

  trackbyFn(_index: number, data:NTodo.TodoData){
    return data.id;
  }

  ordenarData(){
    this.todoData.sort((a,b) => a.priority - b.priority)
  }
}
