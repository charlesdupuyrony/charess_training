import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {
    FormControl,
    Validators,
    FormGroup,
    FormBuilder,
} from '@angular/forms';

import {InstitutionService} from "../institution.service";
import {Institution} from "../institution.model";
import {startWith, switchMap} from 'rxjs/operators';
import { Observable, map } from 'rxjs';
import {Location} from "../../../core/models/security/location";

@Component({
    selector: 'app-form',
    templateUrl: './institution.form.component.html'
})

export class InstitutionFormComponent implements OnInit {

    action: string;
    title: string;
    fg: FormGroup;
    institution: Institution;
    locationControl = new FormControl();
    locations=[];
    filteredLocations: Observable<Location[]>;

    constructor(public fm: MatDialogRef<InstitutionFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
                public service: InstitutionService,  private fb: FormBuilder){
        this.action = data.action;
        if (this.action === 'edit') {
            this.institution = data.institution;
            this.title = this.institution.name;
        } else {
            this.title = 'New Institution Partner';
            this.institution = new Institution({});
        }
        this.fg = this.createContactForm();
    }

    ngOnInit() {
        this.service.getLocations().subscribe((res)=>{
            this.locations = res;
            this.filteredLocations = this.locationControl.valueChanges.pipe(startWith(''), map(value => {
                return this._filter(value)
            }));
        });
    }

    _filter(value: string): Location[] {
        return this.locations.filter(location=>location.name.toLowerCase().includes(typeof value === 'string'?value.toLowerCase():value));
    }

    display(location):string {
        if(location)
            return location.fullname ;
    }

    // formControl = new FormControl('', [
    //     Validators.required
    // ]);
    //
    // getErrorMessage() {
    //     return this.formControl.hasError('required')
    //         ? 'Required field'
    //         : this.formControl.hasError('email')
    //             ? 'Not a valid email'
    //             : '';
    // }

    createContactForm(): FormGroup {
        return this.fb.group(this.institution);
    }

    submit() {
    }

    cancel(): void {
        this.fm.close();
    }

    public save(): void {
        let obj = this.fg.getRawValue();
        obj.locationAddress = this.locationControl.value.id;
        console.log(obj, '-----------------', this.locationControl)
        //this.teachersService.addTeachers(this.proForm.getRawValue());
    }

}
