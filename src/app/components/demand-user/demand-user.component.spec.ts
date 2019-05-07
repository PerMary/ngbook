import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandUserComponent } from './demand-user.component';

describe('DemandUserComponent', () => {
  let component: DemandUserComponent;
  let fixture: ComponentFixture<DemandUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
