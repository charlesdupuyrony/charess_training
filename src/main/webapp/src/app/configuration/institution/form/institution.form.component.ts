import {Component, OnInit} from "@angular/core";
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup
} from "@angular/forms";
import {Observable, map} from "rxjs";
import {InstitutionService} from "../institution.service";
import {startWith} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {Person} from "../../../core/models/security/person";
import {Institution} from "../../../core/models/security/institution";

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
    isIdentifierDuplicated = [];
    isEmailDuplicated = [];
    msg: string;

    constructor(private fb: FormBuilder, private router: Router, private service: InstitutionService, private snack: MatSnackBar){
        const st = this.router.getCurrentNavigation().extras.state;
        this.title = st?'Edit the current institution':'Create new institution';
        let pl = (st && st.place)?st.place: new Institution({});
        pl.managers = this.fb.array(pl.managers==null?[this.fb.group(new Person({}))]: pl.managers.map(m=>this.fb.group(m)));

        if(pl && pl.parent)
            this.parent.setValue(pl.parent);
        if(pl && pl.locationAddress)
            this.locationAddress.setValue(pl.locationAddress);
        this.fg = this.fb.group(pl);
    }

    ngOnInit(){
        this.places = this.parent.valueChanges.pipe(startWith(''),
            map(value => {
                if(typeof value==='string' && value.trim().length < 1)
                    return [];
                this.service.getPlaces(typeof value==='string'?value.toLowerCase():value.fullname).subscribe((res)=>{
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
        ob.parent = this.parent.value?.toString().trim().length <1?ob.parent:this.parent.value;
        ob.locationAddress = this.locationAddress.value;
        ob.managers = this.managers.getRawValue();
        this.service.save(ob).subscribe(
            (res) => this.success(),
            (err) => this.error(err)
        );
    }

    back(){
        this.router.navigate(['configuration/institution/page']);
    }

    get managers(): FormArray {
        return this.fg.get('managers') as FormArray;
    }

    check(index){
        const managers = this.managers.getRawValue();
        const email = managers[index].email;
        if(email?.trim().length < 1)
            return;
        if(managers.length > 1){
            for(let i=0; i< managers.length; i++){
                if(index != i){
                    if(email === managers[i].email){
                        this.isEmailDuplicated[index] = true;
                        this.msg = ' (existed in present pool)';
                        return;
                    }
                }
            }
        }
        this.service.getPersonByEmail(email).subscribe(res => {
            if(res != null){
                this.managers.controls.unshift(this.fb.group(res));
                this.pull(index+1);
            }
        });
    }

    push(){
        this.managers.controls.unshift(this.fb.group(new Person({})));
    }

    pull(index: number): void {
        if (this.managers.length > 1)
            this.managers.removeAt(index);
    }
}
