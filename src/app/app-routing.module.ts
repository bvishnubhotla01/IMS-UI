import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { CanActivateChildGuard } from "./shared/can-activate-child.guard";
import { CanActivateGuard } from "./shared/can-activate.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [CanActivateGuard],
    canActivateChild: [CanActivateChildGuard],
    loadChildren: () =>
      import("src/app/components/products/products.module").then(
        (m) => m.ProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
