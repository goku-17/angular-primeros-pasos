import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacterGokuComponent } from './add-character-goku.component';

describe('AddCharacterGokuComponent', () => {
  let component: AddCharacterGokuComponent;
  let fixture: ComponentFixture<AddCharacterGokuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCharacterGokuComponent]
    });
    fixture = TestBed.createComponent(AddCharacterGokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
