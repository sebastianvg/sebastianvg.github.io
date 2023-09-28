import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSplitterComponent } from './team-splitter.component';

describe('TeamSplitterComponent', () => {
  let component: TeamSplitterComponent;
  let fixture: ComponentFixture<TeamSplitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamSplitterComponent]
    });
    fixture = TestBed.createComponent(TeamSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
