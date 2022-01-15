import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstitutionPageComponent} from "./page/institution.page.component";
import {InstitutionFormComponent} from "./form/institution.form.component";


const routes: Routes = [
    {
        path: 'page',
        component: InstitutionPageComponent,
    },
    {
        path: 'form',
        component: InstitutionFormComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
