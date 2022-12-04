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

    // title: string;
    // place: Institution;
    // parent = new FormControl();
    // locationAddress = new FormControl();
    // places: Observable<Institution[]>;
    // locations: Observable<Location[]>;
    // placeArray = [];
    // locationArray = [];
    // isIdentifierDuplicated = [];
    // isEmailDuplicated = [];
    // msg: string;

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


        //
        // this.title = st?'Edit the current institution':'Create new institution';
        // let pl = (st && st.place)?st.place: new Institution({});
        // pl.managers = this.fb.array(pl.managers==null?[this.fb.group(new Person({}))]: pl.managers.map(m=>this.fb.group(m)));
        // if(pl && pl.parent)
        //     this.parent.setValue(pl.parent);
        // if(pl && pl.locationAddress)
        //     this.locationAddress.setValue(pl.locationAddress);
        // this.fg = this.fb.group(pl);
    }

    ngOnInit(){
        // this.places = this.parent.valueChanges.pipe(startWith(''),
        //     map(value => {
        //         if(typeof value==='string' && value.trim().length < 1)
        //             return [];
        //         this.service.getPlaces(typeof value==='string'?value.toLowerCase():value.fullname).subscribe((res)=>{
        //             this.placeArray = res;
        //         });
        //         return this.placeArray;
        //     })
        // );
        // this.locations = this.locationAddress.valueChanges.pipe(startWith(''),
        //     map(value => {
        //         if(typeof value==='string' && value.trim().length < 1)
        //             return [];
        //         this.service.getLocations(typeof value==='string'?value.toLowerCase(): value.fullname).subscribe((res)=>{
        //             this.locationArray = res;
        //         });
        //         return this.locationArray;
        //     })
        // );
    }

    get participants(): FormArray {
        return this.fg.get('participants') as FormArray;
    }

    // display(ob): string {
    //     if(!ob)
    //         return;
    //     return ob.fullname?ob.fullname:ob.name;
    // }
    //

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


    //
    // get managers(): FormArray {
    //     return this.fg.get('managers') as FormArray;
    // }

    // private chkIdent(arr, index){
    //     const ident = arr[index].identifier;
    //     this.isIdentifierDuplicated = arr.map(e => false);
    //     for(let i=0; i< arr.length; i++){
    //         if(i != index && arr[i].identifier===ident){
    //             this.isIdentifierDuplicated[index] = true;
    //             this.msg = ' (existed in present pool)';
    //             return;
    //         } else {
    //             this.msg = undefined;
    //         }
    //     }
    //     this.service.getPerson(ident).subscribe(res => {
    //         if(res != null){
    //             this.pull(index);
    //             this.managers.controls.unshift(this.fb.group(res));
    //         }
    //     });
    //
    // }

    // private chkEmail(arr, index){
    //     const mail = arr[index].email;
    //     this.isEmailDuplicated = arr.map(e => false);
    //     for(let i=0; i< arr.length; i++){
    //         if(i != index && arr[i].email===mail){
    //             this.isEmailDuplicated[index] = true;
    //             this.msg = ' (existed in present pool)';
    //             return;
    //         } else {
    //             this.msg = undefined;
    //         }
    //     }
    //     this.service.getPerson(mail).subscribe(res => {
    //         if(res != null){
    //             this.pull(index);
    //             this.managers.controls.unshift(this.fb.group(res));
    //         }
    //     });
    // }

    // check(index){
    //     const managers = this.managers.getRawValue();
    //     const email = managers[index].email;
    //     if(email?.trim().length < 1)
    //         return;
    //     if(managers.length > 1){
    //         for(let i=0; i< managers.length; i++){
    //             if(index != i){
    //                 if(email === managers[i].email){
    //                     this.isEmailDuplicated[index] = true;
    //                     this.msg = ' (existed in present pool)';
    //                     return;
    //                 }
    //             }
    //         }
    //     }
    //     this.service.getPersonByEmail(email).subscribe(res => {
    //         if(res != null){
    //             this.managers.controls.unshift(this.fb.group(res));
    //             this.pull(index+1);
    //         }
    //     });
    // }
    //
    // push(){
    //     this.managers.controls.unshift(this.fb.group(new Person({})));
    // }
    //

}
