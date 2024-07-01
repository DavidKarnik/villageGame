import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuildingMainComponent } from './modal-building-main.component';

describe('ModalBuildingMainComponent', () => {
  let component: ModalBuildingMainComponent;
  let fixture: ComponentFixture<ModalBuildingMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBuildingMainComponent]
    });
    fixture = TestBed.createComponent(ModalBuildingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
