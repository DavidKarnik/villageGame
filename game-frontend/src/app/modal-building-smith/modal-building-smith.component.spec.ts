import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuildingSmithComponent } from './modal-building-smith.component';

describe('ModalBuildingSmithComponent', () => {
  let component: ModalBuildingSmithComponent;
  let fixture: ComponentFixture<ModalBuildingSmithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBuildingSmithComponent]
    });
    fixture = TestBed.createComponent(ModalBuildingSmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
