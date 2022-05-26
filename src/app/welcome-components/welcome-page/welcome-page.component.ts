import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { h } from 'ionicons/dist/types/stencil-public-runtime';
import { HouseService } from 'src/app/house.service';
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
    private _router: Router,
    private _houseService: HouseService
  ) {}

  public async ngOnInit() {
    const loggedIn = await this._auth.login();
    if (!loggedIn) this.status = 'newUser';
    else if (this._auth.houseId === null) this.status = 'selectAction';
    else this._router.navigate(['../home']);
  }

  public async newUserClicked(username: string) {
    if (await this._auth.createUser(username)) this.status = 'selectAction';
  }

  public newHouseClicked(housename: string) {
    this._houseService
      .createHouse(housename)
      .subscribe((newHouse) => this._router.navigate(['../home']));
  }

  public async joinClicked(inviteCode: string) {
    if (inviteCode.length !== 4) return;
    this._houseService
      .joinHouse(inviteCode)
      .subscribe(() => this._router.navigate(['../home']));
  }
}
