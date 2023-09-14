import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsNavComponent } from './colors-nav.component';

describe('ColorsNavComponent', () => {
  let component: ColorsNavComponent;
  let fixture: ComponentFixture<ColorsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorsNavComponent]
    });
    fixture = TestBed.createComponent(ColorsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
