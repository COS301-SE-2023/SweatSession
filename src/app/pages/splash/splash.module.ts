import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashPageRoutingModule } from './splash-routing.module';

import { SplashPage } from './splash.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SplashPageRoutingModule,
        NgOptimizedImage
    ],
  declarations: [SplashPage]
})
export class SplashPageModule {}
