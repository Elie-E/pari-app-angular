import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBetListComponent } from './the-bet-list.component';

describe('TheBetListComponent', () => {
  let component: TheBetListComponent;
  let fixture: ComponentFixture<TheBetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
