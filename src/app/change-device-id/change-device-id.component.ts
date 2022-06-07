import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../Services/authorization.service';

@Component({
  selector: 'app-change-device-id',
  templateUrl: './change-device-id.component.html',
  styleUrls: ['./change-device-id.component.css'],
})
export class ChangeDeviceIdComponent implements OnInit {
  constructor(
    public _auth: AuthorizationService,
    public _router: Router,
    @Inject('SERVER_URL') public url: String
  ) {
    this.login('TestDevice123');
  }

  ngOnInit() {}

  public async login(deviceId: string) {
    this._auth.deviceId = deviceId;
    if (! (await this._auth.login()))
      console.log("Login error!");
  }

  public redirectToWelcome(){
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this._router.navigate(["welcome"]));
 }
}
