import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAttackSelect } from './pokemon-attack-select';

describe('PokemonAttackSelect', () => {
  let component: PokemonAttackSelect;
  let fixture: ComponentFixture<PokemonAttackSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonAttackSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAttackSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
