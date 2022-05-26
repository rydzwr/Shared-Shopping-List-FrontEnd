import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css'],
})
export class AddProductDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>
  ) {}

  okClicked(name: string): void {
    this.dialogRef.close(name);
  }

}
