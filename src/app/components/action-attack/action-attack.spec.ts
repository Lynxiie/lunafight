import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAttack } from './action-attack';

describe('ActionAttack', () => {
  let component: ActionAttack;
  let fixture: ComponentFixture<ActionAttack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionAttack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionAttack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
