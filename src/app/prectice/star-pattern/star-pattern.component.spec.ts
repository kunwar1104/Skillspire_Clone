import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPatternComponent } from './star-pattern.component';

describe('StarPatternComponent', () => {
  let component: StarPatternComponent;
  let fixture: ComponentFixture<StarPatternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarPatternComponent]
    });
    fixture = TestBed.createComponent(StarPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
