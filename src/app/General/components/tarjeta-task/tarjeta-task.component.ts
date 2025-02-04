import { Component, Input } from '@angular/core';
import { Task } from '../../../General/interfaces/Task';
import { Router } from '@angular/router';

@Component({
  selector: 'Pen-tarjeta-task',
  standalone: false,
  
  templateUrl: './tarjeta-task.component.html',
  styleUrl: './tarjeta-task.component.css'
})
export class TarjetaTaskComponent {
  @Input()
  public Task!: Task;

  constructor(private router: Router) {}

  //cuando la perosna da click en una tarea se genera una URL dinamioca donde "taskId" es el ID de la tarea a mostrar
  IrDetalles(taskId: number) {
    this.router.navigate(['/task', taskId]);
  }
}
