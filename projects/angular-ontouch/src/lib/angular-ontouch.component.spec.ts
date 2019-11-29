import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOntouchComponent } from './angular-ontouch.component';

describe('AngularOntouchComponent', () => {
  let component: AngularOntouchComponent;
  let fixture: ComponentFixture<AngularOntouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOntouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOntouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
