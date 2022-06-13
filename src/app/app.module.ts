import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { IonicModule } from '@ionic/angular';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule } from '@angular/forms';
import { ChangeDeviceIdComponent } from './change-device-id/change-device-id.component';
import { AuthorizationService } from './Services/authorization.service';
import { AddProductDialogComponent } from './dialogs/add-product-dialog/add-product-dialog.component';
import { InviteCodeDialogComponent } from './dialogs/invite-code-dialog/invite-code-dialog.component';
import { SettingsDialogComponent } from './dialogs/settings-dialog/settings-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProductEditorComponent,
    ChangeDeviceIdComponent,
    AddProductDialogComponent,
    InviteCodeDialogComponent,
    SettingsDialogComponent
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
  providers: [ { provide: 'SERVER_URL', useValue: 'https://sslist.rydzwr.com' }, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
