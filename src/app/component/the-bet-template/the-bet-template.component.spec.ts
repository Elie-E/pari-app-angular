import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBetTemplateComponent } from './the-bet-template.component';

describe('TheBetTemplateComponent', () => {
  let component: TheBetTemplateComponent;
  let fixture: ComponentFixture<TheBetTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBetTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
