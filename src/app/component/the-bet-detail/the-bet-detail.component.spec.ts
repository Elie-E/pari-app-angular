import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBetDetailComponent } from './the-bet-detail.component';

describe('TheBetDetailComponent', () => {
  let component: TheBetDetailComponent;
  let fixture: ComponentFixture<TheBetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBetDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
