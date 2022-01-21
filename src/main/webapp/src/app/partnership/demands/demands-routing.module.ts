import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemandsPageComponent} from "./demands.page.component";

const routes: Routes = [
    {
        path: '',
        component: DemandsPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DemandsRoutingModule {}
