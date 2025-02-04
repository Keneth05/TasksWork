import { Component, OnInit } from '@angular/core';
import { peticionesService } from '../../../General/services/peticiones.service';
import { Task } from '../../../General/interfaces/Task';

@Component({
  selector: 'app-completadas',
  standalone: false,
  
  templateUrl: './completadas.component.html',
  styleUrl: './completadas.component.css'
})
export class CompletadasComponent  implements OnInit{
  public Task: Task []= [];

  constructor(private Peticiones: peticionesService){}

  ngOnInit(): void {
    this.Peticiones.ObtenerTask(true).subscribe((DataTask) => this.Task = DataTask)
  }


}
