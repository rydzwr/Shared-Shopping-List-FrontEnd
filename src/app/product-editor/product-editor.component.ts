import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { AuthorizationService } from '../authorization.service';
import { ProductTree } from '../model/product-tree';
import { ProductDto } from '../model/productDto';
import { ProductService } from '../product.service';
import { ProductDataSource } from './product-data-source';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { InviteCodeDialogComponent } from '../invite-code-dialog/invite-code-dialog.component';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css'],
})
export class ProductEditorComponent implements OnInit {
  public productTree: Observable<ProductTree>;
  public dataSource: ProductDataSource;
  public productsList: any = {};

  public constructor(
    private _productService: ProductService,
    private _router: Router,
    public dialog: MatDialog,
    private http: HttpClient,
    private _auth: AuthorizationService,
    @Inject('SERVER_URL') private url: String
  ) {
    this.dataSource = new ProductDataSource(_productService);
    this.productTree = this.dataSource.connect();
  }

  public ngOnInit() {
    this.fetchProductsList();
  }

  public toggleUserPanel(panel: Element) {
    if (panel.classList.contains('collapsed'))
      panel.classList.remove('collapsed');
    else panel.classList.add('collapsed');
  }

  public toArray(json: unknown): ProductDto[] {
    return json as ProductDto[];
  }

  public toggleBought(product: ProductDto) {
    this._productService
      .toggleBought(product.id!)
      .subscribe(() => (product.bought = !product.bought));
  }

  public async generateInviteCode() {
    try {
      const inviteCode = (
        await this.http
          .get<any>(`${this.url}/user/getInviteCode`, {
            headers: this._auth.authHeader,
          })
          .toPromise()
      ).inviteCode;

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

  public addProductClicked() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((productName) => {
      this._productService
        .addProduct(productName)
        .subscribe((newProduct) => this.fetchProductsList());
    });
  }

  public fetchProductsList() {
    this.dataSource.loadProducts();
  }
}
