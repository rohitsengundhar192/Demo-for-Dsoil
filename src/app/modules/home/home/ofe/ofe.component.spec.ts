import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfeComponent } from './ofe.component';

describe('OfeComponent', () => {
  let component: OfeComponent;
  let fixture: ComponentFixture<OfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
