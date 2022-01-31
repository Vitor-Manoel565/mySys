import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerrorPageRoutingModule } from './terror-routing.module';

import { TerrorPage } from './terror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerrorPageRoutingModule
  ],
  declarations: [TerrorPage]
})
export class TerrorPageModule {}
