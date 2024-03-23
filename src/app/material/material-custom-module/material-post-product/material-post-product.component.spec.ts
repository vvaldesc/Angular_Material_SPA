import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPostProductComponent } from './material-post-product.component';

describe('MaterialPostProductComponent', () => {
  let component: MaterialPostProductComponent;
  let fixture: ComponentFixture<MaterialPostProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialPostProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialPostProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
