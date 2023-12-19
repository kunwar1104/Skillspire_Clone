import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEducComponent } from './user-educ.component';

describe('UserEducComponent', () => {
  let component: UserEducComponent;
  let fixture: ComponentFixture<UserEducComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEducComponent]
    });
    fixture = TestBed.createComponent(UserEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
