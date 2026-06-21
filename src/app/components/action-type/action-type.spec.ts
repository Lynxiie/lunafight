import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionType } from './action-type';

describe('ActionType', () => {
  let component: ActionType;
  let fixture: ComponentFixture<ActionType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
