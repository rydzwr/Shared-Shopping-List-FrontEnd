import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { InviteCodeDialogComponent } from '../invite-code-dialog/invite-code-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( @Inject('SERVER_URL') private url: String,
  private http: HttpClient,
  private _auth: AuthorizationService,
  private _router: Router,
  public dialog: MatDialog) { }

  public async generateInviteCode() {
    try {
      const inviteCode = (await this.http
        .get<any>(`${this.url}/user/getInviteCode`, {
          headers: this._auth.authHeader,
        })
        .toPromise()).inviteCode;

        this.dialog.open(InviteCodeDialogComponent, {
          width: '50%',
          data: inviteCode,
        });
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }
    }
  }

}
