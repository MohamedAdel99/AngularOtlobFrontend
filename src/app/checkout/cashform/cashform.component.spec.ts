import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashformComponent } from './cashform.component';

describe('CashformComponent', () => {
  let component: CashformComponent;
  let fixture: ComponentFixture<CashformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
