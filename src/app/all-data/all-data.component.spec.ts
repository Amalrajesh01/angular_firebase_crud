import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDataComponent } from './all-data.component';

describe('AllDataComponent', () => {
  let component: AllDataComponent;
  let fixture: ComponentFixture<AllDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDataComponent]
    });
    fixture = TestBed.createComponent(AllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
