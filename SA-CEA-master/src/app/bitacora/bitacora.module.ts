import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { bitacoraPageRoutingModule } from './bitacora-routing.module';

import { bitacoraPage } from './bitacora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    bitacoraPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [bitacoraPage]
})
export class bitacoraPageModule {}
