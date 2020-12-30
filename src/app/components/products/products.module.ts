import { NgModule } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { CreateProductComponent } from "./create-product/create-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductRoutingModule } from "./product-routing.module";

@NgModule({
  declarations: [CreateProductComponent, EditProductComponent],
  imports: [ProductRoutingModule],
  exports: [CreateProductComponent, EditProductComponent],
  providers: [ProductService],
})
export class ProductModule {}
