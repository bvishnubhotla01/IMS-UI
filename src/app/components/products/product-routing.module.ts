import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateProductComponent } from "./create-product/create-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

const routes: Routes = [
  {
    path: "create",
    component: CreateProductComponent,
  },
  {
    path: "edit/:id",
    component: EditProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
