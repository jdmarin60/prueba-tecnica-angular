import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private urlSelectCountries: string = 'https://restcountries.eu/rest/v2/alpha/col';
  private http: HttpClient; 

  countries: any = [];

  constructor(http: HttpClient) {
    this.http = http;
  }

/*   getCountries(): any {
    return this.http.get(this.urlSelectCountries).subscribe(
      countries => console.log(this.countries = countries),
    );
  } */
}
