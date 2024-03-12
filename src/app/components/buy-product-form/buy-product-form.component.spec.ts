import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductFormComponent } from './buy-product-form.component';

describe('BuyProductFormComponent', () => {
  let component: BuyProductFormComponent;
  let fixture: ComponentFixture<BuyProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyProductFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
