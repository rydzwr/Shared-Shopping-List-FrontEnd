import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invite-code-dialog',
  templateUrl: './invite-code-dialog.component.html',
  styleUrls: ['./invite-code-dialog.component.css'],
})
export class InviteCodeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<InviteCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inviteCode: string,
  ) {}


}
