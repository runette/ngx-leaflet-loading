import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoadingControlComponent } from './ngx-loading-control.component';

describe('NgxLoadingControlComponent', () => {
  let component: NgxLoadingControlComponent;
  let fixture: ComponentFixture<NgxLoadingControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoadingControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
