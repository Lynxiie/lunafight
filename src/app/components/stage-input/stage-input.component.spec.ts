import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageInput } from './stage-input.component';

describe('StageInput', () => {
  let component: StageInput;
  let fixture: ComponentFixture<StageInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
