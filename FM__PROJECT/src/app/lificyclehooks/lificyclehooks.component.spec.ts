import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LificyclehooksComponent } from './lificyclehooks.component';

describe('LificyclehooksComponent', () => {
  let component: LificyclehooksComponent;
  let fixture: ComponentFixture<LificyclehooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LificyclehooksComponent]
    });
    fixture = TestBed.createComponent(LificyclehooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
