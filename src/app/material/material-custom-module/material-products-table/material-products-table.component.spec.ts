import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialProductsTableComponent } from './material-products-table.component';

describe('MaterialProductsTableComponent', () => {
  let component: MaterialProductsTableComponent;
  let fixture: ComponentFixture<MaterialProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialProductsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
