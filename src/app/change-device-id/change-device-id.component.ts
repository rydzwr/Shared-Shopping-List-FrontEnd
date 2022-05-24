import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-change-device-id',
  templateUrl: './change-device-id.component.html',
  styleUrls: ['./change-device-id.component.css'],
})
export class ChangeDeviceIdComponent implements OnInit {

  constructor(public _auth: AuthorizationService, public _router: Router) { }

  ngOnInit() {}

}