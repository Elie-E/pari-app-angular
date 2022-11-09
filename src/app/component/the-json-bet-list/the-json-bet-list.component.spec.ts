import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheJsonBetListComponent } from './the-json-bet-list.component';

describe('TheJsonBetListComponent', () => {
  let component: TheJsonBetListComponent;
  let fixture: ComponentFixture<TheJsonBetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheJsonBetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheJsonBetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
