import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebardComponent } from './sidebard/sidebard.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebardComponent,
    HeaderComponent
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    SidebardComponent
  ],
  imports: [
    CommonModule,    
  ]
})
export class SharedModule { }
