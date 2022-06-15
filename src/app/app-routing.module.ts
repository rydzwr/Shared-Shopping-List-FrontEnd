import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsDialogComponent } from './settings/settings.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthorizationService } from './Services/authorization.service';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  {
    path: 'home',
    component: ProductEditorComponent,
    canActivate: [AuthorizationService]
  },
  {
    path: 'settings',
    component: SettingsDialogComponent,
    canActivate: [AuthorizationService]
  },
  { path: '**', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
