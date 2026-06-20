import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSelect } from './pokemon-select';

describe('PokemonSelect', () => {
  let component: PokemonSelect;
  let fixture: ComponentFixture<PokemonSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
