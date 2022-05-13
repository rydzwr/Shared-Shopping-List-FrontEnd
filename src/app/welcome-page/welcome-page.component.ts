import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnterGroupDialogComponent } from '../enter-group-dialog/enter-group-dialog.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(EnterGroupDialogComponent, {
      width: '60%',
      height: '80%'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
