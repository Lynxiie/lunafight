import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSwitch } from './action-switch';

describe('ActionSwitch', () => {
  let component: ActionSwitch;
  let fixture: ComponentFixture<ActionSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
