import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomePageComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [AddProductDialogComponent],
  providers: [ { provide: "SERVER_URL", useValue: "http://localhost:8080" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
