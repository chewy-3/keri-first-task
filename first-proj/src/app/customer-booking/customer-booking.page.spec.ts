import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerBookingPage } from './customer-booking.page';

describe('CustomerBookingPage', () => {
  let component: CustomerBookingPage;
  let fixture: ComponentFixture<CustomerBookingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomerBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
