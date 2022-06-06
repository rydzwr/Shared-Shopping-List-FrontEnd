import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/Services/authorization.service';
import { HouseService } from 'src/app/Services/house.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css'],
})
export class SettingsDialogComponent implements OnInit {
  public status = '';

  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    private _auth: AuthorizationService,
    private _houseService: HouseService,
    private _router: Router
  ) {}

  public ngOnInit() {
    this.status = 'selectAction';
  }

  public confirmClicked(username: string) {
    if (username !== '' && username !== undefined && username !== null) {
      this._auth.updateUser(username);
      this.dialogRef.close();
      this.reloadComponent();
    } else return;
  }

  reloadComponent() {
    let currentUrl = this._router.url;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate([currentUrl]);
  }

  public confirmHouseClicked(houseName: string) {
    if (houseName !== '' && houseName !== undefined && houseName !== null) {
      this._houseService.updateHouse(houseName);
      this.dialogRef.close();
      this.reloadComponent();
    } else return;
  }

  public async leaveHouseConfirmed() {
    this._houseService.removeUser();
    this.dialogRef.close();
    this._router.navigate(["welcome"]);
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
    this.dialogRef.close();
  }
}
