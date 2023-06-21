import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugupdationComponent } from './bugupdation.component';

describe('BugupdationComponent', () => {
  let component: BugupdationComponent;
  let fixture: ComponentFixture<BugupdationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugupdationComponent]
    });
    fixture = TestBed.createComponent(BugupdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
