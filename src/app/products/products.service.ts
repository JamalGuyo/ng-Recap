import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productsUrl).pipe(
      tap(data => console.log('All :' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `an error occurred : ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status} error-Message : ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
