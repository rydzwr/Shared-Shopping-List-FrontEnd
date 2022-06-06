import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/Services/house.service';
import { AuthorizationService } from '../Services/authorization.service';
import { ServerService } from '../Services/server.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  public status = '';
  public wrongCodeStatus = '';

  constructor(
    @Inject('SERVER_URL') private url: String,
    private http: HttpClient,
    private _auth: AuthorizationService,
    private _router: Router,
    private _houseService: HouseService,
    private _serverService: ServerService
  ) {}

  public async ngOnInit() {
    const loggedIn = await this._auth.login();
    if (!loggedIn) this.status = 'newUser';
    else if (this._auth.houseId === null) this.status = 'selectAction';
    else this._router.navigate(['../home']);
  }

  public backClicked() {
    this.status = 'newUser';
  }

  public async newUserClicked(username: string) {
    if (username !== '' && username !== null && username !== undefined) {
      if (await this._auth.createUser(username)) this.status = 'selectAction';
      else {
        await this._auth.updateUser(username);
        this.status = 'selectAction';
      }
    } else return;
  }

  public backToSelectActionClicked() {
    this.status = 'selectAction';
  }

  public newHouseClicked(housename: string) {
    this._houseService
      .createHouse(housename)
      .subscribe((newHouse) => this._router.navigate(['../home']));
  }

  public async joinClicked(inviteCode: string) {
    if ((await this._houseService.joinHouse(inviteCode)) === true) {
      this._router.navigate(['../home']);
    } else if (inviteCode.length !== 4) {
      this.wrongCodeStatus = 'wrongCode';
      return;
    } else {
      this.wrongCodeStatus = 'wrongCode';
    }
  }
}
