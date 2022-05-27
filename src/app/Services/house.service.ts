import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { HouseDto } from '../model/houseDto';
import { ProductService } from '../Services/product.service';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor(
    @Inject('SERVER_URL') private url: String,
    private _productService: ProductService,
    private http: HttpClient,
    private _auth: AuthorizationService
  ) {}

  public createHouse(housename: string): Observable<HouseDto> {
    let house: HouseDto | undefined = { name: housename };

    return this.http.post<HouseDto>(`${this.url}/house`, house, {
      headers: this._auth.authHeader,
    });
  }

  public joinHouse(inviteCode: string): Observable<void> {
    return this.http.post<void>(
      `${this.url}/house/join/${inviteCode}`,
      undefined,
      {
        headers: this._auth.authHeader,
      }
    );
  }

  public clearHouse(): Observable<void> {
    console.log("clear-run");
    return this.http.patch<void>(
      `${this.url}/house/clear/`,
      undefined,
      {
        headers: this._auth.authHeader,
      }
    );
  }

  public clearUserProducts(): Observable<void> {
    return this.http.post<void>(
      `${this.url}/user/removeWhereBoughtTrue/`,
      undefined,
      {
        headers: this._auth.authHeader,
      }
    );
  }
}
