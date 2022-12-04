import {Component, OnInit} from "@angular/core";
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup, Validators
} from "@angular/forms";
import {Observable, map} from "rxjs";
import {startWith} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {TrainingService} from "../training.service";
import {Topic} from "../../../core/models/training/topic";
import {Institution} from "../../../core/models/security/institution";
import {Training} from "../../../core/models/training/training";
import {InstitutionService} from "../../../configuration/institution/institution.service";
import {Person} from "../../../core/models/security/person";

@Component({
    selector: 'app-form',
    templateUrl: './training.broadcast.completion.component.html',
    styleUrls: ['./training.broadcast.completion.component.scss']

})

export class TrainingBroadcastCompletionComponent implements OnInit {

    private _msg: string;

    constructor(private router: Router){
        const tn = this.router.getCurrentNavigation().extras.state?.training;
        this._msg = `You have successfully broadcast the training: "${tn?.topic?.title}", scheduled from ${tn?.startDate} to ${tn?.endDate}`;
    }

    get msg(): string {
        return this._msg;
    }

    ngOnInit(){}

    go(e){
        this.router.navigate(['/organisation/training/broadcast']);
    }
}