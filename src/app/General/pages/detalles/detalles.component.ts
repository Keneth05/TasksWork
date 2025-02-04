import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { User } from '../../interfaces/User';
import { ActivatedRoute } from '@angular/router';
import { peticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-detalles',
  standalone: false,
  
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{
  public TaskID!: number;
  public Task!:Task;
  public User!:User;

  constructor(private route: ActivatedRoute, private peticionesService: peticionesService) {}


  ngOnInit(): void {
    //obtener los parametros de la url que yo escoja o tarea pues
    this.route.paramMap.subscribe(params => {
      //convierte el parametro en numero y la asigna a la variable
      this.TaskID = Number(params.get('id'));
      this.TraerDetalles(); // llamar a funcion para que haga las peticiones de la APi para obtener los datos
    });
  }


  TraerDetalles(){
    //peticiones para obtener la tarea y el usurio, estan como anidadas porque para la peticion del usuerio se necesita o depende de la primera, hjay que usar el mismo resultado pues 
    this.peticionesService.ObtenerTareaID(this.TaskID).subscribe(task => {this.Task = task;
      this.peticionesService.ObtenerUsuario(task.userId).subscribe(user => {
        this.User = user;
      });
    });
  }
}
