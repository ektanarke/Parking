import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalComponent } from './Vehical.component';

describe('VehicalComponent', () => {
  let component: VehicalComponent;
  let fixture: ComponentFixture<VehicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
