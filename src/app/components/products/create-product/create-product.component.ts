import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { getDefaultProduct } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
})
export class CreateProductComponent {
  @Output() productCreated = new EventEmitter<boolean>();
  @ViewChild("ProductName") productName: ElementRef<any>;
  @ViewChild("Price") price: ElementRef<any>;
  @ViewChild("Quantity") quantity: ElementRef<any>;
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

  clearForm(): void {
    this.productName.nativeElement.value = "";
    this.price.nativeElement.value = "";
    this.quantity.nativeElement.value = "";
  }
}
