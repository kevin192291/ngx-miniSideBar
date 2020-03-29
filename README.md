<p align="center">
  <img height="256px" width="256px" style="text-align: center;"
  src="https://github.com/kevin192291/ngx-miniSideBar/raw/master/logo.png">
</p>

# NgxMinisidebar - Open Source Library for Angular Web Apps to provide a nice collapsable sidebar that is small and customizable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## ❓ Why use ngx-miniSidebar
- :Because Material design doesn't yet provide a mini sidebar
- :Because I plan to maintain as small of a code footprint as possible.
- :Because this can be customized easly and I will accept as many PRs as I need to make this a great package

## What does it look like by default?
  Closed View:
  <img width="350px" src="https://github.com/kevin192291/ngx-miniSideBar/raw/master/closed%20Sidebar.PNG">
  
  Opened View:
  <img width="350px" src="https://github.com/kevin192291/ngx-miniSideBar/raw/master/opened%20Sidebar.PNG">
## Requirements
- :[angular router - v9.x](https://www.npmjs.com/package/@angular/router)
- :[tslib - ^1.10.0](https://www.npmjs.com/package/tslib),

## 🔨 Installation

run:
`npm install --save ngx-minisidebar`

Include the module:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'; // <-- required RouterModule
import { NgxMinisidebarModule } from 'ngx-minisidebar'; // <-- Add Ngx mini Sidebar

@NgModule({
  imports: [
    BrowserModule,
    NgxMinisidebarModule, // <-- Add Ngx mini Sidebar
    RouterModule.forRoot([]) // <-- required RouterModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Add the style to your style.scss
`@import '~ngx-minisidebar/styles/ngx-minisidebar.style.scss';`

Add `<ngx-minisidebar></ngx-minisidebar>` in your Html

All Set!
Also check 🔎: [stackblitz](https://stackblitz.com/edit/ngx-minisidebar) for a working example
## 💣 Further help
Post in the Issues, and I am happy to help and if you have fixes I would be more than happy to pull them in!
