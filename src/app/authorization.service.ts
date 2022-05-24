import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  constructor() {
    //Get proper device ID
    console.log("Created auth service");
  }

  private _deviceId = 'TestDevice123';

  public get deviceId() {
    return this._deviceId;
  }

  public set deviceId(val: string) {
    this._deviceId = val;
    console.log(val);
  }

  public get authHeader(): HttpHeaders {
    console.log("get header "+this._deviceId);
    return new HttpHeaders({
      Authorization: `Basic ${btoa(this._deviceId)}`,
    });
  }
}
