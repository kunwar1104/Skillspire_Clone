import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterixComponent } from './materix.component';

describe('MaterixComponent', () => {
  let component: MaterixComponent;
  let fixture: ComponentFixture<MaterixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterixComponent]
    });
    fixture = TestBed.createComponent(MaterixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
