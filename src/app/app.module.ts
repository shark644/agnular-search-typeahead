import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponents } from './AppComponents.services';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  
    HttpClientModule,
    AppRoutingModule,
    NgxTypeaheadModule
  ],
  
  providers: [AppComponents],
  bootstrap: [AppComponent]
})
export class AppModule { }
