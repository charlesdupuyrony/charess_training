import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Training} from "../../../core/models/training/training";
import {TrainingService} from "../training.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
    selector: 'app-form',
    templateUrl: './training.details.component.html',
    styleUrls: ['./training.details.component.scss']

})

export class TrainingDetailsComponent implements OnInit {
    fg: FormGroup;
    training: Training;
    startDate: Date;
    endDate: Date;
    loading = false;


    constructor(private router: Router, private fb: FormBuilder, private service: TrainingService, private snack: MatSnackBar){
        const state = this.router.getCurrentNavigation().extras.state;
        this.training = state?state.training:JSON.parse(localStorage.getItem("training"));
        this.startDate = new Date(this.training?.startDate);
        this.endDate = new Date(this.training?.endDate);

        this.fg = this.fb.group(this.training);
    }

    ngOnInit(){}

    private toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }

    back(){
        this.router.navigate(['organisation/training/page']);
    }

    private chgSuccess(){
        this.toast('bg-green','Training status successfully changed...');
        this.back();
    }

    private chgError(err: HttpErrorResponse){
        this.toast('bg-red','Technical issues. Status cannot be changed!');
        console.error(err);
    }

    chg(s){
        let value = this.fg.getRawValue();
        const ob = {training: value.id, status: s};
        this.service.status(ob).subscribe(
            (res) => this.chgSuccess(),
            (err) => this.chgError(err)
        );
    }

    submit(ob: any): void {
        console.log('=============', ob.status);
    }

}