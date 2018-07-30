import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KintMainComponent } from './kint-main.component';

describe('KintMainComponent', () => {
  let component: KintMainComponent;
  let fixture: ComponentFixture<KintMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KintMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KintMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
