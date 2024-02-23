import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OngoingEtricPage } from './ongoing-etric.page';

describe('OngoingEtricPage', () => {
  let component: OngoingEtricPage;
  let fixture: ComponentFixture<OngoingEtricPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OngoingEtricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
