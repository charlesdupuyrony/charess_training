import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InstitutionService} from "../../configuration/institution/institution.service";
import {TrainingService} from "../../core/service/training.service";
import {Training} from "../../core/models/training/training";

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html'
})

export class TimelineComponent implements OnInit {

    logs = [];
    training: Training;

    constructor(private router: Router, private service: TrainingService) {
        try {
            this.training = this.router.getCurrentNavigation().extras.state.training;
            localStorage.setItem("training", JSON.stringify(this.training));
        } catch (e) {
            if(localStorage.getItem("training") && localStorage.getItem("training") != null)
                this.training = JSON.parse(localStorage.getItem("training"));
        }

        if(this.training?.id){
            this.service.log(this.training.id).subscribe(res => {
                this.logs = res;
            });
        }
    }

    ngOnInit() {}

    ngOnDestroy() {
        localStorage.removeItem("training");
    }
}
