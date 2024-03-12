import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterateProductCardsComponent } from './iterate-product-cards.component';

describe('IterateProductCardsComponent', () => {
  let component: IterateProductCardsComponent;
  let fixture: ComponentFixture<IterateProductCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IterateProductCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IterateProductCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
