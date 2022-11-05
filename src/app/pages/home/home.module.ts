import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { CardModule } from '../../shared/card/card.module';
import { HomePageComponent } from './home.component';
import { HomePageRoutingModule } from './home.routing.module';
import { InfiniteScrollModule } from '../../shared/inifine-scroll/inifinite-scroll.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CardModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
