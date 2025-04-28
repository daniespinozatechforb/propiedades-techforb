import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopPropertiesComponent } from './dashboard-top-properties.component';

describe('DashboardTopPropertiesComponent', () => {
  let component: DashboardTopPropertiesComponent;
  let fixture: ComponentFixture<DashboardTopPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTopPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTopPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
