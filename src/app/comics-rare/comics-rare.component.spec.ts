import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsRareComponent } from './comics-rare.component';

describe('ComicsRareComponent', () => {
  let component: ComicsRareComponent;
  let fixture: ComponentFixture<ComicsRareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsRareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsRareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
