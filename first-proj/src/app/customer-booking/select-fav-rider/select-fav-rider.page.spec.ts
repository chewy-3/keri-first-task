import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectFavRiderPage } from './select-fav-rider.page';

describe('SelectFavRiderPage', () => {
  let component: SelectFavRiderPage;
  let fixture: ComponentFixture<SelectFavRiderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectFavRiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
