import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandRowComponent } from './demand-row.component';

describe('DemandRowComponent', () => {
  let component: DemandRowComponent;
  let fixture: ComponentFixture<DemandRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
