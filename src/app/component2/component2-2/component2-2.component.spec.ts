import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component22Component } from './component2-2.component';

describe('Component22Component', () => {
  let component: Component22Component;
  let fixture: ComponentFixture<Component22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
