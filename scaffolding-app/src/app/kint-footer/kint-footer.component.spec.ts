import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KintFooterComponent } from './kint-footer.component';

describe('KintFooterComponent', () => {
  let component: KintFooterComponent;
  let fixture: ComponentFixture<KintFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KintFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KintFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
