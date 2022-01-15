import {Component, Inject, OnDestroy, OnInit} from "@angular/core";
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators
} from "@angular/forms";
import {Institution, Manager} from "../institution.model";
import {Observable, map} from "rxjs";
import {InstitutionService} from "../institution.service";
import {startWith} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../../core/models/security/user";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {TopicService} from "../../topic/topic.service";
import {Topic} from "../../topic/topic.model";
import {sync} from "glob";

@Component({
    selector: 'app-form',
    templateUrl: './institution.form.component.html'
})

export class InstitutionFormComponent implements OnInit {

    fg: FormGroup;
    title: string;
    place: Institution;
    parent = new FormControl();
    locationAddress = new FormControl();
    places: Observable<Institution[]>;
    locations: Observable<Location[]>;
    placeArray = [];
    locationArray = [];

    constructor(private fb: FormBuilder, private router: Router, private service: InstitutionService, private snack: MatSnackBar){
        const st = this.router.getCurrentNavigation().extras.state;
        this.title = st?'Edit the current institution':'Create new institution';
        this.fg = this.fb.group(st?st.place: new Institution({}));
        if(st && st.place && st.place.parent)
            this.parent.setValue(st.place.parent);
        if(st && st.place && st.place.locationAddress)
            this.locationAddress.setValue(st.place.locationAddress)

    }

    ngOnInit(){
        this.places = this.parent.valueChanges.pipe(startWith(''),
            map(value => {
                if(typeof value==='string' && value.trim().length < 1)
                    return [];
                this.service.getPlaces(typeof value==='string'?value.toLowerCase():value.name).subscribe((res)=>{
                    this.placeArray = res;
                });
                return this.placeArray;
            })
        );
        this.locations = this.locationAddress.valueChanges.pipe(startWith(''),
            map(value => {
                if(typeof value==='string' && value.trim().length < 1)
                    return [];
                this.service.getLocations(typeof value==='string'?value.toLowerCase(): value.fullname).subscribe((res)=>{
                    this.locationArray = res;
                });
                return this.locationArray;
            })
        );
    }

    display(ob): string {
        if(!ob)
            return;
        return ob.fullname?ob.fullname:ob.name;
    }

    create(): FormGroup {
        return;
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
        ob.parent = this.parent.value;
        ob.locationAddress = this.locationAddress.value;
        console.log(ob);
        this.service.save(ob).subscribe(
            (res) => this.success(),
            (err) => this.error(err)
        );
    }

    back(){
        this.router.navigate(['configuration/institution/page']);
    }
}
