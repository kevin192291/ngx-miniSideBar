import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ILinks } from '../types/links.interface';

@Component({
  selector: 'ngx-minisidebar',
  template: `
  <nav #navbar class="navbar" id="navbar">
  <ul class="navbar-nav">
      <li class="logo" (click)="toggle()">
          <a [routerLink]="homeLink" class="nav-link">
              <span class="link-text logo-text">{{ title }}</span>
              <span>{{ toggleIcon }}</span>
          </a>
      </li>
      <li class="nav-item" *ngFor="let link of links">
          <a [routerLink]="link.path" class="nav-link">
              <span class="link-text">{{ link.text }}</span>
              <span>{{ link.icon }}</span>
          </a>
      </li>
      </ul>
</nav>
  `,
  styles: ['./../styles/ngx-minisidebar.scss']
})
export class NgxMinisidebarComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;
  @Input() links: ILinks[] = [];
  @Input() toggleIcon: string = '➡️';
  @Input() title: string = '';
  @Input() homeLink: string = '';
  @Output() isOpened = new EventEmitter<boolean>();
  @Output() loaded = new EventEmitter<boolean>(false);
  constructor() { }

  ngOnInit(): void {
    this.loaded.emit(true);
  }

  toggle(): void {
    if (this.navbar.nativeElement.classList.contains('navbar-open')) {
      this.navbar.nativeElement.classList.remove('navbar-open');
      this.isOpened.emit(true);
    } else {
      this.navbar.nativeElement.classList.add('navbar-open');
      this.isOpened.emit(false);
    }
  }

}
