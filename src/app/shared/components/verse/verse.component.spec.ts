import { async, TestBed } from '@angular/core/testing';
import { StartWithVowelPipe } from '../../pipes';

import { VerseComponent } from './verse.component';

describe('VerseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerseComponent, StartWithVowelPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(VerseComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VerseComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
