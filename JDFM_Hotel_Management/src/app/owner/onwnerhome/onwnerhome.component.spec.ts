import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnwnerhomeComponent } from './onwnerhome.component';

describe('OnwnerhomeComponent', () => {
  let component: OnwnerhomeComponent;
  let fixture: ComponentFixture<OnwnerhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnwnerhomeComponent]
    });
    fixture = TestBed.createComponent(OnwnerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
