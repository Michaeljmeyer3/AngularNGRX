import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KintHeaderComponent } from './kint-header.component';

describe('KintHeaderComponent', () => {
  let component: KintHeaderComponent;
  let fixture: ComponentFixture<KintHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KintHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KintHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
