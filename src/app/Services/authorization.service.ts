import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDto } from '../model/userDto';

declare var window: any;
declare var device: any;

export interface UserAuthInfo {
  deviceId: string;
  username: string;
  houseId?: number;
}

@Injectable()
export class AuthorizationService implements CanActivate {
  private _endpoint = '/users';
  private _appRoute = '/home';
  private _loginRoute = '/welcome';

  private _deviceId: string = 'BrowserUser';
  private _loggedIn: boolean = false;
  private _redirectUrl?: string;

  private _defaultAuth: UserAuthInfo = {
    deviceId: this._deviceId,
    username: '',
    houseId: undefined,
  };

  private _userAuthSubject = new BehaviorSubject<UserAuthInfo>(
    this._defaultAuth
  );

  constructor(
    private _http: HttpClient,
    private _router: Router,
    @Inject('SERVER_URL') private _url: String
  ) {
    if (typeof window['cordova'] !== 'undefined') {
      this._deviceId = device.uuid;
      this._userAuthSubject.next({
        deviceId: this._deviceId,
        username: this._defaultAuth.username,
        houseId: this._defaultAuth.houseId,
      });
    }
    console.log("Auth service created, deviceId: " + this._deviceId)
  }

  public get loggedIn(): boolean {
    return this._loggedIn;
  }

  public get userAuth(): UserAuthInfo {
    return this._userAuthSubject.getValue();
  }

  public get redirectUrl(): string {
    return this._redirectUrl ? this._redirectUrl : this._appRoute;
  }

  public get userAuthObservable(): Observable<UserAuthInfo> {
    return this._userAuthSubject.asObservable();
  }

  public get authHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Basic ${btoa(this._deviceId)}`,
    });
  }

  public forceSetDeviceId(val: string): Promise<boolean> {
    this._deviceId = val;
    return this.login();
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin(state.url);
  }

  private checkLogin(url: string): boolean {
    if (this._loggedIn) {
      return true;
    }

    this._redirectUrl = url;
    this._router.navigateByUrl(this._loginRoute);

    return false;
  }

  public logout() {
    this._loggedIn = false;
    this._userAuthSubject.next(this._defaultAuth);
  }

  public async login(): Promise<boolean> {
    try {
      const user = await this._http
        .get<UserDto>(`${this._url}/user/login`, {
          headers: this.authHeader,
        })
        .toPromise();

      if (user !== undefined && user.name) {
        this._loggedIn = true;

        this._userAuthSubject.next({
          deviceId: this._deviceId,
          username: user.name,
          houseId: user.houseId,
        });

        return true;
      } else return false;
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }
  }

  public async createUser(username: string): Promise<boolean> {
    console.log("Creating user with deviceID: " + this._userAuthSubject.getValue().deviceId);
    let user: UserDto | undefined = { name: username };

    try {
      user = await this._http
        .post<UserDto>(`${this._url}/user/createUser`, user, {
          headers: this.authHeader,
        })
        .toPromise();

      if (user !== undefined && user.name) {
        this._loggedIn = true;

        this._userAuthSubject.next({
          deviceId: this._deviceId,
          username: user.name,
          houseId: user.houseId,
        });

        return true;
      } else return false;
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }
  }

  public async renameUser(userName: string): Promise<boolean> {
    let user: UserDto | undefined = { name: userName };
    try {
      user = await this._http
        .patch<UserDto>(`${this._url}/user/renameUser`, user, {
          headers: this.authHeader,
        })
        .toPromise();

      if (user !== undefined && user.name) {
        this._loggedIn = true;

        this._userAuthSubject.next({
          deviceId: this._deviceId,
          username: user.name,
          houseId: user.houseId,
        });
        return true;
      } else return false;
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }

      return false;
    }
  }
}
