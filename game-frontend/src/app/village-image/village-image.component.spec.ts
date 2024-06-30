import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageImageComponent } from './village-image.component';

describe('VillageImageComponent', () => {
  let component: VillageImageComponent;
  let fixture: ComponentFixture<VillageImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillageImageComponent]
    });
    fixture = TestBed.createComponent(VillageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
