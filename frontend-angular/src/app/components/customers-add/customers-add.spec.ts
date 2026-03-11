import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAdd } from './customers-add';

describe('CustomersAdd', () => {
  let component: CustomersAdd;
  let fixture: ComponentFixture<CustomersAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
