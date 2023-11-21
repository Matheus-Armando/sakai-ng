import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculdadeComponent } from './faculdade.component';

describe('FaculdadeComponent', () => {
  let component: FaculdadeComponent;
  let fixture: ComponentFixture<FaculdadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaculdadeComponent]
    });
    fixture = TestBed.createComponent(FaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
