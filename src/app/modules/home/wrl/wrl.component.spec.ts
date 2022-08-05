import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrlComponent } from './wrl.component';

describe('WrlComponent', () => {
  let component: WrlComponent;
  let fixture: ComponentFixture<WrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
