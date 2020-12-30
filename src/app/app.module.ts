import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { CreateProductComponent } from "./components/products/create-product/create-product.component";
import { EditProductComponent } from "./components/products/edit-product/edit-product.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { CanActivateGuard } from "./Shared/can-activate.guard";
import { UserService } from "./services/user.service";
import { UserGreetingComponent } from "./components/user-greeting/user-greeting.component";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    UserGreetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [CanActivateGuard, UserService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
