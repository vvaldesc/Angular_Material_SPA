import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSesionFormComponent } from './material-sesion-form.component';

describe('MaterialSesionFormComponent', () => {
  let component: MaterialSesionFormComponent;
  let fixture: ComponentFixture<MaterialSesionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialSesionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialSesionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
