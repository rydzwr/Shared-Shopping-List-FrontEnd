import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  public async updateHouse(houseName: string): Promise<boolean | undefined> {
    let house: HouseDto | undefined = { name: houseName };
    try {
      return await this.http
        .post<boolean>(`${this.url}/house/update`, house, {
          headers: this._auth.authHeader,
        })
        .toPromise();

    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }
  }

  public async joinHouse(inviteCode: string): Promise<boolean | undefined> {
    try {
      return await this.http
        .post<boolean>(`${this.url}/house/join/${inviteCode}`, undefined, {
          headers: this._auth.authHeader,
        })
        .toPromise();
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }
  }

  public clearHouse(): Observable<void> {
    return this.http.patch<void>(`${this.url}/house/clear/`, undefined, {
      headers: this._auth.authHeader,
    });
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

  public async removeUser(): Promise<boolean | undefined> {
    try{
      return await this.http.patch<boolean>(`${this.url}/house/removeUser/`, undefined, {
        headers: this._auth.authHeader,
      }).toPromise();

    }catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }

  }
}
