import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsRareDetailsComponent } from './comics-rare-details.component';

describe('ComicsRareDetailsComponent', () => {
  let component: ComicsRareDetailsComponent;
  let fixture: ComponentFixture<ComicsRareDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsRareDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsRareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
