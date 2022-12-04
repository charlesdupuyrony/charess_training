import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})

export class SigninComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    fm: FormGroup;
    submitted = false;
    loading = false;
    error = '';
    hide = true;

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,  private router: Router, private authService: AuthService) {
        super();
    }

    ngOnInit() {
        this.fm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    get f() {
        return this.fm.controls;
    }

    onSubmit() {
        this.submitted = true;
        this.loading = true;
        this.error = '';

        if (this.fm.invalid) {
            this.error = 'Invalid username and/or password!!';
            return;
        }

        this.subs.sink = this.authService.login(this.f.username.value, this.f.password.value).subscribe(
            (res) => {
                this.loading = false;
                const page = 'USER_PENDING'===this.authService.currentUserValue.status?'/authentication/reset-password':this.authService.currentUserValue?.profile?.page;
                this.router.navigate([page]);
            },
            (err) => {
                this.loading = false;
                this.error = 'Invalid username and/or password!!';
                console.error(err, 'from signin component')
            }
        );
    }
}
