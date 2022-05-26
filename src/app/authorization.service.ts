import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserDto } from './model/userDto';

@Injectable()
export class AuthorizationService {
  constructor(
    private http: HttpClient,
    @Inject('SERVER_URL') private url: String
  ) {
    //Get proper device ID
    console.log('Created auth service');
  }

  private _deviceId = 'TestDevice123';
  private _username: string | null = null;
  private _houseId: number | null = null;

  public get deviceId() {
    return this._deviceId;
  }

  public get username() {
    return this._username;
  }

  public get houseId() {
    return this._houseId;
  }

  public set deviceId(val: string) {
    this._deviceId = val;
    console.log(val);
  }

  public get authHeader(): HttpHeaders {
    console.log('get header ' + this._deviceId);
    return new HttpHeaders({
      Authorization: `Basic ${btoa(this._deviceId)}`,
    });
  }

  public async login(): Promise<boolean> {
    try {
      const user = await this.http
        .get<UserDto>(`${this.url}/user/login`, {
          headers: this.authHeader,
        })
        .toPromise();

      if (user !== undefined) {
        this._username = user.name ? user.name : null;
        this._houseId = user.houseId ? user.houseId : null;
      }

      return true;
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }
  }

  public async createUser(username: string): Promise<boolean> {
    let user: UserDto | undefined = { name: username };

    try {
      user = await this.http
        .post<UserDto>(`${this.url}/user/createUser`, user, {
          headers: this.authHeader,
        })
        .toPromise();

      if (user !== undefined) {
        this._username = user.name ? user.name : null;
        this._houseId = user.houseId ? user.houseId : null;
      }

      return true;
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }
  }
}
