import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanyeComponent } from './fanye.component';

describe('FanyeComponent', () => {
  let component: FanyeComponent;
  let fixture: ComponentFixture<FanyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
