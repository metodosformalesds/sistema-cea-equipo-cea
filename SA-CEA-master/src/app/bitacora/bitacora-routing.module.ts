import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { bitacoraPage } from './bitacora.page';

const routes: Routes = [
  {
    path: '',
    component: bitacoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class bitacoraPageRoutingModule {}
