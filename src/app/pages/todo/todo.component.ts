import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NTodo } from '../../models/todo.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  //Con el decorador Input recibo data del padre al hijo
  @Input({required: true}) todoData!: NTodo.TodoData;
  @Input() first!: boolean;
  @Input() last!: boolean;
  @Input() odd!: boolean;
  @Input() even!: boolean;
  //Con el decorador Oputput envio inforamcion del hijo al padre
  @Output() onClickIcon = new EventEmitter<boolean>();
  @Output() onClickIconX = new EventEmitter<NTodo.TodoData>();


}
