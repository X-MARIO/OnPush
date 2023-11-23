import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component11Component } from './component1-1.component';

describe('Component11Component', () => {
  let component: Component11Component;
  let fixture: ComponentFixture<Component11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
