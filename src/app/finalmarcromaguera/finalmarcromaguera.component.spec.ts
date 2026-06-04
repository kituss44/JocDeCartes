import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalmarcromagueraComponent } from './finalmarcromaguera.component';

describe('FinalmarcromagueraComponent', () => {
  let component: FinalmarcromagueraComponent;
  let fixture: ComponentFixture<FinalmarcromagueraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalmarcromagueraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalmarcromagueraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
