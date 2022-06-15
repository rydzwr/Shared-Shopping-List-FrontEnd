import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../Services/authorization.service';

@Component({
  selector: 'app-change-device-id',
  templateUrl: './change-device-id.component.html',
  styleUrls: ['./change-device-id.component.css'],
})
export class ChangeDeviceIdComponent {
  constructor(
    public _auth: AuthorizationService,
    public _router: Router,
    @Inject('SERVER_URL') public url: String
  ) {
  }

  public async changeDevice(deviceId: string) {
    if (!(await this._auth.forceSetDeviceId(deviceId)))
      console.log("Change deviceId component: Login error!");
    this._router.navigateByUrl('/welcome');
  }
}
