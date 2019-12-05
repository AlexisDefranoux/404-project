import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmeComponent } from './enigme.component';

describe('EnigmeComponent', () => {
  let component: EnigmeComponent;
  let fixture: ComponentFixture<EnigmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnigmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
