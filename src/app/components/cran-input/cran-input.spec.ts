import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CranInput } from './cran-input';

describe('CranInput', () => {
  let component: CranInput;
  let fixture: ComponentFixture<CranInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CranInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CranInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
