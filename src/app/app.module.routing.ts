import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
// import { HomeViewComponent } from './views/home/home.component';
// import { CatalogViewComponent } from './views/catalog/catalog.component';

@NgModule({
  declarations: [ 
    MenuHomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'app-menu-home', component:MenuHomeComponent }
      

    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}