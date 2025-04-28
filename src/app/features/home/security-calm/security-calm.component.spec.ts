import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCalmComponent } from './security-calm.component';

describe('SecurityCalmComponent', () => {
  let component: SecurityCalmComponent;
  let fixture: ComponentFixture<SecurityCalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityCalmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityCalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
