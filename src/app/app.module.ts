import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { CanActivateGuard } from "./shared/can-activate.guard";
import { UserService } from "./services/user.service";
import { UserGreetingComponent } from "./components/user-greeting/user-greeting.component";
import { CommonModule, DatePipe } from "@angular/common";
import { CanActivateChildGuard } from "./shared/can-activate-child.guard";
import { MaterialModule } from "./shared/material.module";
import { ProductModule } from "./components/products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    UserGreetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    ProductModule,
  ],
  providers: [CanActivateGuard, CanActivateChildGuard, UserService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
