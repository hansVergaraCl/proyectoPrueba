import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCComponent } from './componente-c.component';

describe('ComponenteCComponent', () => {
  let component: ComponenteCComponent;
  let fixture: ComponentFixture<ComponenteCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
