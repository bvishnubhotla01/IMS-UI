import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { getDefaultProduct } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
})
export class CreateProductComponent {
  @Output() productCreated = new EventEmitter<boolean>();
  constructor(private productService: ProductService) {}

  createProduct(ProductName: string, Price: number, Quantity: number): void {
    const newProduct = getDefaultProduct({
      ProductName,
      Price,
      Quantity,
    });
    this.productService.addProduct(newProduct).subscribe(
      (result) => {
        if (result?.ProductID > 0) {
          this.productCreated.emit(true);
        }
      },
      (error: HttpErrorResponse) => console.log(error.message)
    );
  }
}
