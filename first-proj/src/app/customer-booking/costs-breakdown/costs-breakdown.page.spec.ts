import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostsBreakdownPage } from './costs-breakdown.page';

describe('CostsBreakdownPage', () => {
  let component: CostsBreakdownPage;
  let fixture: ComponentFixture<CostsBreakdownPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CostsBreakdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
