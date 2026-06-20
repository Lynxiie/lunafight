import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionObject } from './action-object';

describe('ActionObject', () => {
  let component: ActionObject;
  let fixture: ComponentFixture<ActionObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionObject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionObject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
