import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  postsArray = new Array();
  productsArray = new Array();
  product: any;
  post: any;

  public shouldShow = true;

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 4; index++) {
      this.postsArray.push(this.post);
    }
    for (let index = 0; index < 5; index++) {
      this.productsArray.push(this.product);
    }
  }

}
