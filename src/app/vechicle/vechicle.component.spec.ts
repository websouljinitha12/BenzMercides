import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicleComponent } from './vechicle.component';

describe('VechicleComponent', () => {
  let component: VechicleComponent;
  let fixture: ComponentFixture<VechicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VechicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
