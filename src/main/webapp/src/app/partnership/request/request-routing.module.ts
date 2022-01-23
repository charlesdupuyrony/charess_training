import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestFormComponent} from "./form/request.form.component";
import {TimelineComponent} from "../timeline/timeline.component";

const routes: Routes = [
    {
        path: '',
        component: RequestFormComponent,
    },
    {
        path: 'timeline',
        component: TimelineComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestRoutingModule {}
