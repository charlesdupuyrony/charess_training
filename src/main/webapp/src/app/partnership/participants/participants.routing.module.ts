import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParticipantsTrainingComponent} from "./training/participants.training.component";
import {SubmissionParticipantsComponent} from "./submission/submission.participants.component";

const routes: Routes = [
    {
        path: 'submission',
        component: SubmissionParticipantsComponent,
    },
    {
        path: '',
        component: ParticipantsTrainingComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ParticipantsRoutingModule {}
