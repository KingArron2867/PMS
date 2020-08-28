import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      {path: 'welcome', component: WelcomeComponent },
      {path: 'contact', component: ContactComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      
      
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
