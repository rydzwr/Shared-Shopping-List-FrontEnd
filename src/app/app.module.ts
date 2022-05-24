import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-components/welcome-page/welcome-page.component';
import { FormsModule } from '@angular/forms';
import { ChangeDeviceIdComponent } from './change-device-id/change-device-id.component';
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomePageComponent,
    ListsComponent,
    ChangeDeviceIdComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [],
  providers: [ { provide: "SERVER_URL", useValue: "http://localhost:8080" }, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
