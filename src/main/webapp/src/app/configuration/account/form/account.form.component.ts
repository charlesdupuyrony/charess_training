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
import {Router} from "@angular/router";

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
                private fb: FormBuilder, private snack: MatSnackBar, private router: Router){
        this.action = data.action;
        if (this.action === 'edit') {
            this.usr = data.usr;
            this.title = 'Edit the current usr';
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
            id: [this.usr.id],
            username: [this.usr.username, [Validators.required]],
            locale: [this.usr.locale, [Validators.required]],
            profile: [this.usr.profile],
            status: [this.usr.status],
            institution: [this.usr.institution, [Validators.required]],
            person: this.fb.group({
                id: [this.usr.person.id],
                firstName: [this.usr.person.firstName, [Validators.required]],
                lastName: [this.usr.person.lastName, [Validators.required]],
                email: [this.usr.person.email, [Validators.required]],
            })
        });
    }

    compare(a, b): boolean {
        return a && b ?(a.id && b.id && a.id===b.id):a===b;
    }

    submit() {
        let obj = this.fg.getRawValue();
        this.service.create(obj).subscribe(
            data => {
                this.success();
                this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/configuration/account/page']);
                });
            },
            (err: HttpErrorResponse) => this.error(err)
        );
    }

    cancel(): void {
        this.fm.close();
    }

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
