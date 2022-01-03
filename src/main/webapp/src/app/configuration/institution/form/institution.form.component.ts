import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {
    FormControl,
    Validators,
    FormGroup,
    FormBuilder,
} from '@angular/forms';
import { formatDate } from '@angular/common';
import {InstitutionService} from "../institution.service";
import {Institution} from "../institution.model";
import {Person} from "../../../core/models/security/person";

@Component({
    selector: 'app-form',
    templateUrl: './institution.form.component.html'
})

export class InstitutionFormComponent implements OnInit {

    action: string;
    title: string;
    fg: FormGroup;
    institution: Institution;
    locations: Location[];

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
        // this.service.getLocations().subscribe(res => {
        //     this.locations = res;
        // });
    }

    formControl = new FormControl('', [
        Validators.required
    ]);

    getErrorMessage() {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    }

    createContactForm(): FormGroup {
        return this.fb.group(this.institution);
    }

    submit() {
    }

    cancel(): void {
        this.fm.close();
    }

    public save(): void {
        console.log(this.fg.getRawValue(), '-----------------')

        //this.teachersService.addTeachers(this.proForm.getRawValue());
    }
}
