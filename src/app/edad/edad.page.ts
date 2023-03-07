import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage {

  nombre!: string;
  edad!: number;
  mensaje!: string;
  imagen!: string;

  constructor(private http: HttpClient) { }

  determinarEdad() {
    this.http.get(`https://api.agify.io/?name=${this.nombre}`).subscribe((data: any) => {
      this.edad = data.age;
      if (this.edad < 18) {
        this.mensaje = 'Eres joven';
        this.imagen = 'joven.png';
      } else if (this.edad >= 18 && this.edad < 60) {
        this.mensaje = 'Eres adulto';
        this.imagen = 'viejo.png';
      } else {
        this.mensaje = 'Eres anciano';
        this.imagen = 'anciano.png';
      }
    });
  }

}
