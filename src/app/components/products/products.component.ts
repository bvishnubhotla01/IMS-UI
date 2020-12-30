import { Component, OnInit } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { ProductService } from "src/app/services/product.service";
import { IProduct } from "src/app/models/product";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  mode: string = "view";
  productData: IProduct[] = null;
  displayedColumns: string[] = [
    "select",
    "ProductID",
    "ProductName",
    "Quantity",
    "Price",
    "CreatedDate",
  ];
  dataSource = new MatTableDataSource<IProduct>();
  selection = new SelectionModel<IProduct>(true, []);

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productData = products;
      this.dataSource.data = this.productData;
    });
  }
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  isMultipleSelected(): boolean {
    return this.selection.selected.length > 1;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IProduct): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.ProductID + 1
    }`;
  }

  addProduct(): void {
    this.mode = "create";
    this.router.navigate(["create"], { relativeTo: this.route });
  }

  onCreateProduct(): void {
    this.mode = "view";
    this.router.navigateByUrl("/products");
  }
}
