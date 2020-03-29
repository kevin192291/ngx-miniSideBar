import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { NgxMinisidebarComponent } from './ngx-minisidebar.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [NgxMinisidebarComponent],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [NgxMinisidebarComponent, RouterModule]
})
export class NgxMinisidebarModule { }
