import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuildingBarracksComponent } from './modal-building-barracks.component';

describe('ModalBuildingBarracksComponent', () => {
  let component: ModalBuildingBarracksComponent;
  let fixture: ComponentFixture<ModalBuildingBarracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBuildingBarracksComponent]
    });
    fixture = TestBed.createComponent(ModalBuildingBarracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
