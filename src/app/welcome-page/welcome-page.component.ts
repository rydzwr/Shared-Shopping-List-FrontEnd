import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { UserDto } from '../model/userDto';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  public status = '';
  public newUsername = '';

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
        if (err.status === 401) this.status = 'newUser';
      }
    }

    if (user !== undefined) this._router.navigate(['../home']);
  }

  public async newGroupClicked() {}

  public async joinClicked(inviteCode: string) {}
}
