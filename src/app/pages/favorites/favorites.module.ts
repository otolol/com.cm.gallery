import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../shared/card/card.module';
import { FavoritesPageComponent } from './favorites.component';
import { FavoritesPageRouting } from './favorites.routing';

@NgModule({
  imports: [CommonModule, FavoritesPageRouting, CardModule],
  declarations: [FavoritesPageComponent],
  exports: [FavoritesPageComponent],
})
export class FavoritesPageModule {}
