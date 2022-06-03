import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "home", component: ProductEditorComponent },
  { path: "welcome", component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
