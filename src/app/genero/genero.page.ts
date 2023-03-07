import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-genero',
  templateUrl: 'genero.page.html',
  styleUrls: ['genero.page.scss'],
})
export class GeneroPage {
  nombre!: string;
  genero!: string;

  constructor(private http: HttpClient) {}

  predecirGenero() {
    this.http.get<any>(`https://api.genderize.io/?name=${this.nombre}`).subscribe((response) => {
      this.genero = response.gender;
    });
  }
}
