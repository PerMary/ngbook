import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandDescriptionComponent } from './demand-description.component';

describe('DemandDescriptionComponent', () => {
  let component: DemandDescriptionComponent;
  let fixture: ComponentFixture<DemandDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
