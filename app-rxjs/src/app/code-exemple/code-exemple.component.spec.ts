import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExempleComponent } from './code-exemple.component';

describe('CodeExempleComponent', () => {
  let component: CodeExempleComponent;
  let fixture: ComponentFixture<CodeExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
