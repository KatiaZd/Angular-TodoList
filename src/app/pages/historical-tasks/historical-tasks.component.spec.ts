import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalTasksComponent } from './historical-tasks.component';

describe('HistoricalTasksComponent', () => {
  let component: HistoricalTasksComponent;
  let fixture: ComponentFixture<HistoricalTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
