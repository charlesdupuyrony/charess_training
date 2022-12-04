import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from "../../configuration/account/account.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})

export class SignupComponent implements OnInit {
    fg: FormGroup;
    submitted = false;
    returnUrl: string;
    hide = true;
    chide = true;
    institutions=[];

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, public service: AccountService, private snack: MatSnackBar){
        this.fg = this.fb.group({
            username: ['', Validators.required],
            locale: ['', [Validators.required]],
            institution: ['', [Validators.required]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            person: this.fb.group({
                firstName: ['', [Validators.required]],
                lastName: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email, Validators.minLength(5)]]
            })
        },
            {validator: this.confirmedValidator('password', 'confirmPassword')});
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnInit(){
        this.service.getInstitutions().subscribe((res)=>{
            this.institutions = res;
        });
    }

    confirmedValidator(controlName: string, matchingControlName: string){
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
    }

    get f() {
        return this.fg.controls;
    }

    onSubmit() {
        this.submitted = true;
        this.service.create(this.fg.getRawValue()).subscribe(
            data => {
                this.snack.open('Your account has been successfully created. But you must contact a system administrator to get it activated. You are unable to connect with an unactivated account', '', {
                    duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: 'bg-green',
                });
                this.router.navigate(['/authentication/signin']);
            },
            (err: HttpErrorResponse) => console.log(err)
        );
    }
}
