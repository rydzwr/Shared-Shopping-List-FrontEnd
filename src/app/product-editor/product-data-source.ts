import { CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, catchError, of, finalize } from 'rxjs';
import { AuthorizationService } from '../authorization.service';
import { ProductTree } from '../model/product-tree';
import { ProductDto } from '../model/productDto';
import { ProductService } from '../product.service';

export class ProductDataSource {
  private _productsSubject = new BehaviorSubject<ProductTree>({
    houseName: 'NaN',
    productsByUser: {},
  });
  private _loadingSubject = new BehaviorSubject<boolean>(true);

  public get loading$(): Observable<boolean> {
    return this._loadingSubject.asObservable();
  }

  public get data(): ProductTree {
    return this._productsSubject.value;
  }

  constructor(
    private _productService: ProductService,
    private _auth: AuthorizationService
  ) {}

  public connect(collectionViewer?: CollectionViewer): Observable<ProductTree> {
    return this._productsSubject.asObservable();
  }

  public disconnect(_collectionViewer: CollectionViewer): void {
    this._productsSubject.complete();
    this._loadingSubject.complete();
  }

  public loadProducts() {
    this._loadingSubject.next(true);
    this._productService
      .getProductTree()
      .pipe(
        catchError(() => of(undefined)),
        finalize(() => this._loadingSubject.next(false))
      )
      .subscribe((tree?: ProductTree) => {
        if (tree) {
          this._productsSubject.next(tree);
        }
      });
  }

  public addProductOffline(product: ProductDto) {
    const tree = this.data;
    const username = this._auth.username;

    if (username && username in tree.productsByUser) {
      (tree.productsByUser[username] as ProductDto[]).unshift(product);
      console.log(tree);
      this._productsSubject.next(tree);
    }
  }
}
