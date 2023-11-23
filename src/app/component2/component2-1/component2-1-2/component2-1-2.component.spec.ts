import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component212Component } from './component2-1-2.component';

describe('Component212Component', () => {
  let component: Component212Component;
  let fixture: ComponentFixture<Component212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component212Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
