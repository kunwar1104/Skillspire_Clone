import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMaterixComponent } from './demo-materix.component';

describe('DemoMaterixComponent', () => {
  let component: DemoMaterixComponent;
  let fixture: ComponentFixture<DemoMaterixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoMaterixComponent]
    });
    fixture = TestBed.createComponent(DemoMaterixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
