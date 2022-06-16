import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { AuthorizationService } from '../Services/authorization.service';
import { ProductTree } from '../model/product-tree';
import { ProductDto } from '../model/productDto';
import { ProductService } from '../Services/product.service';
import { ProductDataSource } from './product-data-source';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { InviteCodeDialogComponent } from '../dialogs/invite-code-dialog/invite-code-dialog.component';
import { AddProductDialogComponent } from '../dialogs/add-product-dialog/add-product-dialog.component';
import { HouseService } from '../Services/house.service';
import { SettingsDialogComponent } from '../settings/settings.component';
import { NoopScrollStrategy } from '@angular/cdk/overlay';

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
    private _houseService: HouseService,
    private _router: Router,
    public dialog: MatDialog,
    private http: HttpClient,
    private _auth: AuthorizationService,
    @Inject('SERVER_URL') private url: String
  ) {
    this.dataSource = new ProductDataSource(_productService, _auth);
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

  public countProducts(array: unknown) {
    return (array as ProductDto[]).length;
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
        width: '95%',
        data: inviteCode,
        scrollStrategy: new NoopScrollStrategy(),
      });
    } catch (err: any) {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
      }
    }
  }

  public settingsClicked() {
    this._router.navigate(['../settings']);
  }

  public addProductClicked() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '95%',
      scrollStrategy: new NoopScrollStrategy(),
    });

    dialogRef.afterClosed().subscribe((productName: string) => {
      if (productName && productName.trim() !== '') {
        this._productService
          .addProduct(productName)
          .subscribe((newProduct) =>
            this.dataSource.addProductOffline(newProduct)
          );
      }
    });
  }

  clearHouseClicked() {
    this._houseService.clearHouse().subscribe(() => this.fetchProductsList());
  }

  removeUserBoughtProductsClicked() {
    this._houseService
      .clearUserProducts()
      .subscribe(() => this.fetchProductsList());
  }

  public fetchProductsList() {
    this.dataSource.loadProducts();
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
