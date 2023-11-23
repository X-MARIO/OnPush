import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component21Component } from './component2-1.component';

describe('Component21Component', () => {
  let component: Component21Component;
  let fixture: ComponentFixture<Component21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
