import {Component, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Training} from "../../../core/models/training/training";
import {TrainingService} from "../training.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Person} from "../../../core/models/security/person";
import {PartnerTrainingParticipants} from "../../../core/models/training/partner.training.participants";
import {Participant} from "../../../core/models/training/participant";
import {TrainingParticipants} from "../../../core/models/training/training.participants";
import {Institution} from "../../../core/models/security/institution";
import {InstitutionService} from "../../../configuration/institution/institution.service";


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
    partners = new FormControl();
    partnerArray = [];

    // loading = false;


    constructor(private router: Router, private fb: FormBuilder, private service: TrainingService, private snack: MatSnackBar, private placeService: InstitutionService){
        const state = this.router.getCurrentNavigation().extras.state;

        this.training = state?state.training:JSON.parse(localStorage.getItem("training"));
        this.startDate = new Date(this.training?.startDate);
        this.endDate = new Date(this.training?.endDate);

        const trainingParticpants = new TrainingParticipants(
            {
                'training': this.training,
                'participants': this.fb.array(this.training.participants.length <1?[this.format(new Participant({}))]:this.training.participants.map(
                 p => this.format(new Participant(p)))
                )
            });
        this.fg = this.fb.group(trainingParticpants);
    }

    ngOnInit(){
        this.placeService.getPlaces('').subscribe((res)=>{
            this.partnerArray = res;
        });
    }

    get participants(): FormArray {
        return this.fg.get('participants') as FormArray;
    }

    compare(a, b): boolean {
        return a && b ?(a.id && b.id && a.id===b.id):a===b;
    }

    format(p: Participant): FormGroup {
        return this.fb.group({
            id: [p?.id],
            partner: [p?.partner],
            logistic: [p.logistic],
            transport: [p.transport],
            person: this.fb.group({
                id: [p?.person?.id],
                identifier: [p?.person?.identifier, [Validators.required]],
                firstName: [p?.person?.firstName, [Validators.required]],
                lastName: [p?.person?.lastName, [Validators.required]],
                phone: [p?.person?.phone, [Validators.required]],
                email: [p?.person?.email, [Validators.required]],
            })
        });
    }

    edit(){
        this.router.navigate(['organisation/training/broadcast'], {state: {training: this.training}});
        // this.router.navigate(['configuration/institution/form'],{state:{place: row}});
    }

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
        // localStorage.setItem("training", JSON.stringify(this.training));
        // this.router.navigate(['organisation/training/details'],{state:{training: this.training}});
    }

    private success(){
        this.toast('bg-green','The usr has been successfully created');
        this.back();
    }

    private error(err: HttpErrorResponse){
        this.toast('bg-red','Something went wrong the usr has not been created. Please, try again!');
        console.error(err);
    }

    private chgError(err: HttpErrorResponse){
        this.toast('bg-red','Technical issues. Status cannot be changed!');
        console.error(err);
    }

    submit(ob: any): void {
        ob.id = this.training.id;
        ob.participants = this.participants.getRawValue();
        this.service.updateParticipants(ob).subscribe(
            (res) => this.success(),
            (err) => this.error(err)
        );
    }

    push(){
        this.participants.controls.unshift(this.format(new Participant({})));
    }

    pull(index: number): void {
        if (this.participants.length > 0){
            this.participants.removeAt(index);
            if(this.participants.length==0)
                this.push()
        }

    }
}