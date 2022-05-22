import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() {
    this.login();
  }

  private _token = '';

  public get authHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Basic ${this._token}`,
    });
  }

  private login() {
    const uuid = 'TestDeviceID'; // TODO: Get proper Andoird UUID
    this._token = btoa(uuid);
  }
}
