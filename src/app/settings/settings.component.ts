import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/Services/authorization.service';
import { HouseService } from 'src/app/Services/house.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsDialogComponent implements OnInit {
  public status = '';

  constructor(
    private _auth: AuthorizationService,
    private _houseService: HouseService,
    private _router: Router
  ) {}

  public ngOnInit() {
    this.status = 'selectAction';
  }

  public confirmClicked(username: string) {
    if (username !== '' && username !== undefined && username !== null) {
      this._auth.renameUser(username);
      this._router.navigate(['../welcome']);
    } else return;
  }

  public confirmHouseClicked(houseName: string) {
    if (houseName !== '' && houseName !== undefined && houseName !== null) {
      this._houseService.updateHouse(houseName);
      this._router.navigate(['../welcome']);
    } else return;
  }

  public async leaveHouseConfirmed() {
    this._houseService.removeUser().subscribe(() => {
        this._auth.login();
        this._router.navigate(['../welcome']);
    });
  }

  public leaveHouseClicked() {
    this.status = 'leaveHouse';
  }

  public changeNameClicked() {
    this.status = 'changeName';
  }

  public changeHouseNameClicked() {
    this.status = 'changeHouseName';
  }

  public cancelClicked() {
    this.status = 'selectAction';
  }

  public onNoClick(): void {
    this._router.navigate(['../welcome']);
  }
}
