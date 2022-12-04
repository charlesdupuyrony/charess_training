import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from "../../configuration/account/account.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})

export class ForgotPasswordComponent implements OnInit {
    authForm: FormGroup;
    submitted = false;
    returnUrl: string;
    msg = false;

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public service: AccountService){}

    ngOnInit(){
        this.authForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email, Validators.minLength(5)], ],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() {
        return this.authForm.controls;
    }

    onSubmit(){
        if(this.authForm.invalid){
            return;
        } else {
            const email = this.authForm.value.email;
            this.service.forgotPassword(email).subscribe(
                data => {
                    this.router.navigate(['/authentication/signin']);
                },
                (err: HttpErrorResponse) => {
                    this.msg = true;
                    console.log(err);
                }
        );

        }
        this.submitted = true;
    }
}
