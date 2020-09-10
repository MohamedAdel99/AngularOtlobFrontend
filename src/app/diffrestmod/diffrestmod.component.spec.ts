import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffrestmodComponent } from './diffrestmod.component';

describe('DiffrestmodComponent', () => {
  let component: DiffrestmodComponent;
  let fixture: ComponentFixture<DiffrestmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffrestmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffrestmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
