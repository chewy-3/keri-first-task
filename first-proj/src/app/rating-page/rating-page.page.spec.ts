import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingPagePage } from './rating-page.page';

describe('RatingPagePage', () => {
  let component: RatingPagePage;
  let fixture: ComponentFixture<RatingPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RatingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
