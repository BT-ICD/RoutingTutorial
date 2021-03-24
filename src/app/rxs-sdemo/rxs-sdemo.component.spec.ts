import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxsSDemoComponent } from './rxs-sdemo.component';

describe('RxsSDemoComponent', () => {
  let component: RxsSDemoComponent;
  let fixture: ComponentFixture<RxsSDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxsSDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxsSDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
