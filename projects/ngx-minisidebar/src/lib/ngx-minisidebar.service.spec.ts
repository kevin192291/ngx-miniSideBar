import { TestBed } from '@angular/core/testing';

import { NgxMinisidebarService } from './ngx-minisidebar.service';

describe('NgxMinisidebarService', () => {
  let service: NgxMinisidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMinisidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
