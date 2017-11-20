import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonCharacterComponent } from './cartoon-character.component';

describe('CartoonCharacterComponent', () => {
  let component: CartoonCharacterComponent;
  let fixture: ComponentFixture<CartoonCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
