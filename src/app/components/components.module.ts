import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BtnComponent } from './btn/btn.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { IterateProductCardsComponent } from './iterate-product-cards/iterate-product-cards.component';
import { BuyProductFormComponent } from './buy-product-form/buy-product-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HorizontalNavComponent } from './horizontal-nav/horizontal-nav.component'; // Import the missing AppRoutingModule
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AvatarComponent,
    BtnComponent,
    UserCardComponent,
    ProductCardComponent,
    IterateProductCardsComponent,
    BuyProductFormComponent,
    HorizontalNavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    HorizontalNavComponent,
    IterateProductCardsComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
