import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(
    private http: HttpClient,
    @Inject('SERVER_URL') private url: String
  ) {
    //Get proper device ID
    console.log('Created auth service');
  }

  public async checkConnection(): Promise<boolean | undefined> {
    try {
      return await this.http
        .get<boolean>(`${this.url}/server`, {}).toPromise();

    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }
  }
}
