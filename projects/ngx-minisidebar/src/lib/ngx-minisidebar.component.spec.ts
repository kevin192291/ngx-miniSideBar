import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMinisidebarComponent } from './ngx-minisidebar.component';

describe('NgxMinisidebarComponent', () => {
  let component: NgxMinisidebarComponent;
  let fixture: ComponentFixture<NgxMinisidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMinisidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMinisidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
