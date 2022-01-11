import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicPageComponent} from "./page/topic.page.component";

const routes: Routes = [
    {
        path: 'page',
        component: TopicPageComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicRoutingModule {}
