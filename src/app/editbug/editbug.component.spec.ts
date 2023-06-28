import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbugComponent } from './editbug.component';

describe('EditbugComponent', () => {
  let component: EditbugComponent;
  let fixture: ComponentFixture<EditbugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditbugComponent]
    });
    fixture = TestBed.createComponent(EditbugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
