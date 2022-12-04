import {NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {TrainingBroadcastComponent} from "./broadcast/training.broadcast.component";
import {TrainingBroadcastCompletionComponent} from "./broadcast-completion/training.broadcast.completion.component";
import {TrainingPageComponent} from "./page/training.page.component";


const routes: Routes = [
    {
        path: 'broadcast',
        component: TrainingBroadcastComponent,
    },
    {
        path: 'page',
        component: TrainingPageComponent,
    },
    {
        path: 'broadcast-completion',
        component: TrainingBroadcastCompletionComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule {}