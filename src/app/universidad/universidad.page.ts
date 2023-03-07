import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Universidad {
  name: string;
  domains: string[];
  web_pages: string[];
}

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.page.html',
  styleUrls: ['./universidad.page.scss'],
})
export class UniversidadPage {
  public universidades: Universidad[] = [];
  public pais!: string;

  constructor(private http: HttpClient) {}

  public buscarUniversidades(): void {
    const url = `http://universities.hipolabs.com/search?country=${this.pais}`;

    this.http
      .get<Universidad[]>(url)
      .pipe(
        map((universidades) =>
          universidades.map((u) => ({
            name: u.name,
            domains: u.domains,
            web_pages: u.web_pages,
          }))
        ),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.universidades = data;
      });
  }

  public abrirPagina(url: string): void {
    window.open(url, '_blank');
  }
}
