import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrosComponent } from './cuadros.component';

describe('CuadrosComponent', () => {
  let component: CuadrosComponent;
  let fixture: ComponentFixture<CuadrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
