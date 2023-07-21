import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAngularComponent } from './directives-angular.component';

describe('DirectivesAngularComponent', () => {
  let component: DirectivesAngularComponent;
  let fixture: ComponentFixture<DirectivesAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesAngularComponent]
    });
    fixture = TestBed.createComponent(DirectivesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
