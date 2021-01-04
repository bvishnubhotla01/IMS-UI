import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { getDefaultProduct, IProduct } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";
import { getUser } from "src/app/shared/app-utility";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
})
export class EditProductComponent implements OnInit {
  @Input() productId: string;
  @Output() productUpdated = new EventEmitter<boolean>();
  currentProduct: IProduct = getDefaultProduct();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe((product) => {
      this.currentProduct = product;
    });
  }

  updateProduct(ProductName: string, Price: number, Quantity: number): void {
    this.currentProduct = {
      ...this.currentProduct,
      ProductName: ProductName,
      Price: Price,
      Quantity: Quantity,
      CreatedBy: getUser(),
      CreatedDate: new Date(),
    };
    this.productService.editProduct(this.currentProduct).subscribe(
      (result: boolean) => {
        if (result) {
          alert("product updated");
          this.productUpdated.emit(true);
        } else {
          alert("Product update failed. Please try again later.");
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
