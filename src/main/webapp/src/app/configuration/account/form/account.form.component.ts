import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {
    FormGroup,
    FormBuilder, Validators, FormControl,
} from '@angular/forms';

import { Observable, map, startWith } from 'rxjs';
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AccountService} from "../account.service";
import {User} from "../../../core/models/security/user";
import {Profile} from "../../../core/models/security/profile";

@Component({
    selector: 'app-form',
    templateUrl: './account.form.component.html'
})

export class AccountFormComponent implements OnInit {

    action: string;
    title: string;
    fg: FormGroup;
    usr: User;
    profiles=[];
    institutions=[];

    constructor(public fm: MatDialogRef<AccountFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public service: AccountService,
                private fb: FormBuilder, private snack: MatSnackBar){
        this.action = data.action;
        if (this.action === 'edit') {
            this.usr = data.usr;
            this.title = 'Edit the current usr';
            //this.themeControl.setValue(data.usr.theme);
        } else{
            this.title = 'New account';
            this.usr = new User({});
        }
        this.fg = this.create();
    }

    ngOnInit() {
        this.service.getProfiles().subscribe((res)=>{
            this.profiles = res;
        });
        this.service.getInstitutions().subscribe((res)=>{
            this.institutions = res;
        });
    }

    _filter(value: string): Profile[] {
        return this.profiles.filter(profile=>profile.name.toLowerCase().includes(typeof value === 'string'?value.toLowerCase():value));
    }

    display(profile):string {
        if(profile)
            return profile.name;
    }

    create(): FormGroup {
        return this.fb.group({
            username: ['', [Validators.required]],
            locale: ['', [Validators.required]],
            profile: [],
            institution: [],
            person: this.fb.group({
                firstName: ['', [Validators.required]],
                lastName: ['', [Validators.required]],
                email: ['', [Validators.required]],
            })
        });
    }

    submit() {
        let obj = this.fg.getRawValue();
        this.service.create(obj).subscribe(
            data => {
                this.service.setDialogData(data);
                this.success()
            },
            (err: HttpErrorResponse) => this.error(err)
        );
    }

    cancel(): void {
        this.fm.close();
    }

    // public save(): void {
    //     let obj = this.fg.getRawValue();
    //     obj.theme = this.themeControl.value;
    //     this.service.addTopic(obj).subscribe(
    //         data => this.success(),
    //         (err: HttpErrorResponse)=>this.error(err)
    //     );
    // }

    private success(){
        this.toast('bg-green','The usr has been successfully created');
    }

    private error(err:HttpErrorResponse){
        this.toast('bg-red','Something went wrong the usr has not been created. Please, try again!');
        console.error(err);
    }

    private toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right',panelClass: color,
        });
    }
}
