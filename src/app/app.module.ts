import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MenuHomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
