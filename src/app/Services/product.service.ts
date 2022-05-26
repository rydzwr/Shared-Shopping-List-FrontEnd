import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { ProductTree } from '../model/product-tree';
import { ProductDto } from '../model/productDto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    @Inject('SERVER_URL') private url: String,
    private http: HttpClient,
    private _auth: AuthorizationService
  ) {}

  public getProductTree(): Observable<ProductTree> {
    return this.http
      .get<ProductTree>(`${this.url}/house/completeProductsList`, {
        headers: this._auth.authHeader,
      });
  }

  public toggleBought(productId: number): Observable<void> {
    return this.http
      .patch<void>(`${this.url}/product/toggleBought/${productId}`, undefined, {
        headers: this._auth.authHeader,
      });
  }

  public addProduct(productName: string): Observable<ProductDto> {
    const productDto: ProductDto = { name: productName };
    console.log(productDto);
    return this.http
      .post<ProductDto>(`${this.url}/product/add/`, productDto, {
        headers: this._auth.authHeader,
      });
  }
}
