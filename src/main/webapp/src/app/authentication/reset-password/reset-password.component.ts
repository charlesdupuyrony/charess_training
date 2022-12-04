import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from "../../configuration/account/account.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../core/service/auth.service";

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
})

export class ResetPasswordComponent implements OnInit {
    fm: FormGroup;
    submitted = false;
    returnUrl: string;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
                public service: AccountService, private authService: AuthService){}

    ngOnInit(){
        this.fm = this.fb.group({
            newPassword: ['', [Validators.required, Validators.minLength(5)]],
            confirmPassword: ['', [Validators.required]],
        },
        {validator: this.confirmedValidator('newPassword', 'confirmPassword')});

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
        return this.fm.controls;
    }

    onSubmit(){
        this.submitted = true;
        if(this.fm.invalid){
            return;
        } else {
            const usr = this.authService.currentUserValue;
            const password = this.fm.value.newPassword;
            console.log('====', usr);
            this.service.resetPassword(usr.id, password).subscribe(
                data => {
                    const page = usr?.profile?.page;
                    this.router.navigate([page]);
                },
                (err: HttpErrorResponse) => console.log(err)
            );
        }
    }
}
