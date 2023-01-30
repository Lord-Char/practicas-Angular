import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    /*Abajo separe la vista del template en html y lo agregue en un nuevo archivo, con extension .html*/
    templateUrl: './mi-componente.component.html'
})

export class MiComponente {
    /*Aca defino mis propias propiedades*/ 
    public titulo: string;
    public comentario: string;
    public year: number;
    /*Fin de mis propiedades*/ 
    constructor(){
        this.titulo = "Hola mundo, soy Mi Componente";
        this.comentario = "Este es mi primer componente";
        this.year = 2023; 
        
        console.log("componente mi-componente cargado");
        console.log (this.comentario, this.titulo, this.year);
    }
}