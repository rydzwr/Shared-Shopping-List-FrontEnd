import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsDialogComponent } from './dialogs/settings-dialog/settings-dialog.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "home", component: ProductEditorComponent },
  { path: "welcome", component: WelcomePageComponent },
  { path: "settings", component: SettingsDialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
