import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductoService {

  private urlEndpoint: string = 'http://localhost:8080/api/productos';
  private urlSelectCountries: string = 'https://restcountries.eu/rest/v2/alpha/col';
  private http: HttpClient; 

  countries: any[] = []; 

  constructor(http: HttpClient) {
    this.http = http;
  }

  /* getProductos (): Observable <Producto[]> {
    return this.http.get<Producto[]>(this.urlEndpoint).pipe(
      map(response => response as Producto[])
    ); 
  } */
}
