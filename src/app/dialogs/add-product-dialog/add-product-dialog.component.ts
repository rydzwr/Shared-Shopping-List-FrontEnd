import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDataSource } from 'src/app/product-editor/product-data-source';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css'],
})
export class AddProductDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    private _router: Router,
    private _productService: ProductService,
    ) {}

  okClicked(name: string): void {
    if (name !== '' && name !== null && name !== undefined)
    {
      this.dialogRef.close(name);
    }
    else return;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
