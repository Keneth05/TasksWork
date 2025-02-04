import { Component, OnInit } from '@angular/core';
import { Task } from '../../../General/interfaces/Task';
import { peticionesService } from '../../../General/services/peticiones.service';

@Component({
  selector: 'app-pendientes',
  standalone: false,
  
  templateUrl: './pendientes.component.html',
  styleUrl: './pendientes.component.css'
})
export class PendientesComponent implements OnInit{
  public Task: Task[] = [];

  constructor(private Peticiones: peticionesService){}

  ngOnInit(): void {
    this.Peticiones.ObtenerTask(false).subscribe((DataTask) => this.Task = DataTask)
  }


}
