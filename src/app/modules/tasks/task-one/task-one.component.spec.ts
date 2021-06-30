import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOneComponent } from './task-one.component';

describe('TaskOneComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskOneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(TaskOneComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TaskOneComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should animals be equal 5', () => {
    const fixture = TestBed.createComponent(TaskOneComponent);
    const component = fixture.componentInstance;
    expect(component.animals.length).toEqual(5);
  });
});
