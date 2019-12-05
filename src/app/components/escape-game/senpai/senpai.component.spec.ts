import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenpaiComponent } from './senpai.component';

describe('SenpaiComponent', () => {
  let component: SenpaiComponent;
  let fixture: ComponentFixture<SenpaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenpaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenpaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
