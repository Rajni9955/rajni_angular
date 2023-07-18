import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenDemoComponent } from './studen-demo.component';

describe('StudenDemoComponent', () => {
  let component: StudenDemoComponent;
  let fixture: ComponentFixture<StudenDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenDemoComponent]
    });
    fixture = TestBed.createComponent(StudenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
