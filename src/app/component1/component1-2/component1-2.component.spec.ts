import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component12Component } from './component1-2.component';

describe('Component12Component', () => {
  let component: Component12Component;
  let fixture: ComponentFixture<Component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
