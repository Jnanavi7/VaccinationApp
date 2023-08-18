import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VaccineDetailsComponent,
    ChildDetailsComponent,
    ViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
