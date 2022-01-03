import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstitutionPageComponent} from "./page/institution.page.component";


const routes: Routes = [
    {
        path: 'page',
        component: InstitutionPageComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
