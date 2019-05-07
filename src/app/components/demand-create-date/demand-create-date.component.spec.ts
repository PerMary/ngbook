import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandCreateDateComponent } from './demand-create-date.component';

describe('DemandCreateDateComponent', () => {
  let component: DemandCreateDateComponent;
  let fixture: ComponentFixture<DemandCreateDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandCreateDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandCreateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
