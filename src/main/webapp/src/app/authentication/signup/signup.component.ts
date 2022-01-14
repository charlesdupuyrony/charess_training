import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from "../../configuration/account/account.service";
import {HttpErrorResponse} from "@angular/common/http";

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

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, public service: AccountService) {
        this.fg = this.fb.group({
            username: ['', Validators.required],
            locale: ['', [Validators.required]],
            institution: ['', [Validators.required]],
            password: ['', Validators.required],
            cpassword: ['', Validators.required],
            person: this.fb.group({
                firstName: ['', [Validators.required]],
                lastName: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email, Validators.minLength(5)]]
            })
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnInit(){
        this.service.getInstitutions().subscribe((res)=>{
            this.institutions = res;
        });
    }

    get f() {
        return this.fg.controls;
    }

    onSubmit() {
        this.submitted = true;
        this.service.create(this.fg.getRawValue()).subscribe(
            data => {
                this.router.navigate(['/authentication/signin']);
            },
            (err: HttpErrorResponse) => console.log(err)
        );
    }
}
