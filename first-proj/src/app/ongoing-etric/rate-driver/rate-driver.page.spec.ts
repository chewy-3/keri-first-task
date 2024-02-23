import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateDriverPage } from './rate-driver.page';

describe('RateDriverPage', () => {
  let component: RateDriverPage;
  let fixture: ComponentFixture<RateDriverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RateDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
