import {Component, OnInit} from "@angular/core";
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup
} from "@angular/forms";
import {Observable, map} from "rxjs";
import {startWith} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {TrainingService} from "../../../organisation/training/training.service";
import {Institution} from "../../../core/models/security/institution";
import {Training} from "../../../core/models/training/training";
import {PartnerTrainingParticipants} from "../../../core/models/training/partner.training.participants";
import {Person} from "../../../core/models/security/person";

@Component({
    selector: 'app-form',
    templateUrl: './submission.participants.component.html',
    styleUrls: ['./submission.participants.component.scss']

})

export class SubmissionParticipantsComponent implements OnInit {

    fg: FormGroup;
    partner: Institution;
    training: Training;
    startDate: Date;
    endDate: Date;
    msg: string;
    isEmailDuplicated = [];
    isIdentifierDuplicated = [];


    constructor(private fb: FormBuilder, private router: Router, private service: TrainingService, private snack: MatSnackBar){
        const state = this.router.getCurrentNavigation().extras.state;
        const trainingPartner = state?state.trainingPartner:JSON.parse(localStorage.getItem("trainingPartner"));
        this.partner = trainingPartner.partner;
        this.training = trainingPartner.training;
        this.startDate = new Date(this.training?.startDate);
        this.endDate = new Date(this.training?.endDate);

        const partnerTrainingParticpants = new PartnerTrainingParticipants(
            {'partner': this.partner,
                'training': this.training,
                'participants': this.fb.array(trainingPartner.participants==null?[this.fb.group(new Person({}))]:trainingPartner.participants.map(p=>this.fb.group(p)))
            });

        this.fg = this.fb.group(partnerTrainingParticpants);
    }

    ngOnInit(){
    }

    get participants(): FormArray {
        return this.fg.get('participants') as FormArray;
    }

    private toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }

    private success(){
        this.toast('bg-green','The usr has been successfully created');
        this.back();
    }

    private error(err: HttpErrorResponse){
        this.toast('bg-red','Something went wrong the usr has not been created. Please, try again!');
        console.error(err);
    }

    submit(ob: any): void {
        ob.participants = this.participants.getRawValue();
        this.service.participate(ob).subscribe(
            (res) => this.success(),
            (err) => this.error(err)
        );
    }

    back(){
        this.router.navigate(['partnership/participants']);
    }

    push(){
        this.participants.controls.unshift(this.fb.group(new Person({})));
    }

    pull(index: number): void {
        if (this.participants.length > 1)
            this.participants.removeAt(index);
    }

    checkEmail(index){
        const participants = this.participants.getRawValue();
        const email = participants[index].email;
        if(email?.trim().length < 1)
            return;
        if(participants.length > 1){
            for(let i=0; i< participants.length; i++){
                if(index != i){
                    if(email === participants[i].email){
                        this.isEmailDuplicated[index] = true;
                        this.msg = ' (existed in present pool)';
                        return;
                    }
                }
            }
        }
        this.service.getPersonByEmail(email).subscribe(res => {
            if(res != null){
                this.participants.controls.unshift(this.fb.group(res));
                this.pull(index+1);
            }
        });
    }

    checkIdentifier(index){
        const participants = this.participants.getRawValue();
        const identifier = participants[index].identifier;
        if(identifier?.trim().length < 1)
            return;
        if(participants.length > 1){
            for(let i=0; i< participants.length; i++){
                if(index != i){
                    if(identifier === participants[i].email){
                        this.isIdentifierDuplicated[index] = true;
                        this.msg = ' (existed in present pool)';
                        return;
                    }
                }
            }
        }
        this.service.getPersonByIdentifier(identifier).subscribe(res => {
            if(res != null){
                this.participants.controls.unshift(this.fb.group(res));
                this.pull(index+1);
            }
        });
    }

}
