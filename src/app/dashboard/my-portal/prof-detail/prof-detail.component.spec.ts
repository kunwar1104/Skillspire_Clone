import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDetailComponent } from './prof-detail.component';

describe('ProfDetailComponent', () => {
  let component: ProfDetailComponent;
  let fixture: ComponentFixture<ProfDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfDetailComponent]
    });
    fixture = TestBed.createComponent(ProfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
