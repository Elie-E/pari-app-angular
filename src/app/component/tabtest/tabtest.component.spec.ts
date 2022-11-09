import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabtestComponent } from './tabtest.component';

describe('TabtestComponent', () => {
  let component: TabtestComponent;
  let fixture: ComponentFixture<TabtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
