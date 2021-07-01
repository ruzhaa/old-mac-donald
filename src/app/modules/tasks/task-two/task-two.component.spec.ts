import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { TaskTwoComponent } from './task-two.component';

describe('TaskTwoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskTwoComponent],
      imports: [ReactiveFormsModule, AutoCompleteModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(TaskTwoComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TaskTwoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should selectedAnimals be less than or equal 3', () => {
    const fixture = TestBed.createComponent(TaskTwoComponent);
    const component = fixture.componentInstance;
    expect(component.selectedAnimals.length).toBeLessThanOrEqual(3);
  });
});
