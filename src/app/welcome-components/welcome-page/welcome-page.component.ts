import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { h } from 'ionicons/dist/types/stencil-public-runtime';
import { AuthorizationService } from '../../authorization.service';
import { HouseDto } from '../../model/houseDto';
import { UserDto } from '../../model/userDto';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  public status = '';

  constructor(
    @Inject('SERVER_URL') private url: String,
    private http: HttpClient,
    private _auth: AuthorizationService,
    private _router: Router
  ) {}

  public async ngOnInit() {
    let user = undefined;
    try {
      user = await this.http
        .get<UserDto>(`${this.url}/user/login`, {
          headers: this._auth.authHeader,
        })
        .toPromise();
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }
    }

    if (user === undefined) this.status = 'newUser';
    else if (user.houseId === null) this.status = 'selectAction';
    else this._router.navigate(['../home']);
  }

  public async newUserClicked(username: string) {
    let user: UserDto | undefined = { name: username };

    try {
      user = await this.http
        .post<UserDto>(`${this.url}/user/createUser`, user, {
          headers: this._auth.authHeader,
        })
        .toPromise();
      console.log('User from server: ');
      console.log(user);

      this.status = 'selectAction';
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }
    }
  }

  public async newHouseClicked(housename: string) {
    let house: HouseDto | undefined = { name: housename };

    try {
      house = await this.http
        .post<HouseDto>(`${this.url}/house`, house, {
          headers: this._auth.authHeader,
        })
        .toPromise();

      console.log('House from server: ');
      console.log(house);

      this._router.navigate(['../home']);
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }
    }
  }

  public async joinClicked(inviteCode: string) {
    if (inviteCode.length !== 4) return;

    try {
      await this.http
        .post(`${this.url}/house/join/${inviteCode}`, undefined, {
          headers: this._auth.authHeader,
        })
        .toPromise();
      this._router.navigate(['../home']);
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }
    }
  }
}
