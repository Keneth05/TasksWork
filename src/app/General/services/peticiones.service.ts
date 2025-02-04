import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from 'rxjs';
import { Task } from "../interfaces/Task";
import { TaskInfo } from "../interfaces/Task-Info";
import { User } from "../interfaces/User";
import { UserInfo } from '../interfaces/User-Info';

@Injectable({
    providedIn: 'root'
})

export class peticionesService{

    private URL_API:string = "https://jsonplaceholder.typicode.com";
    constructor(private http:HttpClient){}

    public ObtenerTask(Tipo:boolean):Observable<Task[]>{
        const URL:string = `${this.URL_API}/todos?completed=${Tipo}`;
        return this.http.get<TaskInfo[]>(URL)
                        .pipe(
                            map((Tasks) => Tasks.map((Task) =>({
                                userId:Task.userId,
                                id:Task.id,
                                title:Task.title,
                                completed: Task.completed
                            }))),
                            catchError(error => of([]))
                        );   
    
    }

    public ObtenerTareaID(ID: number): Observable<Task> {
        const URL: string = `${this.URL_API}/todos/${ID}`;
        return this.http.get<Task>(URL).pipe(
            catchError(() => [])
        );
    }

    public ObtenerUsuario(ID: number): Observable<User> {
        const URL: string = `${this.URL_API}/users/${ID}`;
        return this.http.get<UserInfo>(URL).pipe(
            map((User) => ({
                Id: User.id,
                Nombre: User.name,
                Correo: User.email,
                Telefono: User.phone,
                Compania: User.company.name
            })),
            catchError(() => [])
        );
    }
}