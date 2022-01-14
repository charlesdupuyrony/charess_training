import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/security/role';
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

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,  private router: Router,  private authService: AuthService) {
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
                const page = this.authService.currentUserValue?.profile?.page;
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



//         this.subs.sink = this.authService.login(this.f.username.value, this.f.password.value).subscribe(
//             (res) => {
//                 alert()
//                 if (res) {
//                     setTimeout(() => {
//                         const role = this.authService.currentUserValue.profile.role;
//
//                         //this.router.navigate(['/admin/dashboard/main']);
//                         // if (role === Role.SUPER || role === Role.ADMIN) {
//                         //     this.router.navigate(['/admin/dashboard/main']);
//                         // } else if (role === Role.ORGANISER) {
//                         //     this.router.navigate(['/teacher/dashboard']);
//                         // } else if (role === Role.ATTENDEE) {
//                         //     this.router.navigate(['/student/dashboard']);
//                         // } else {
//                         //     this.router.navigate(['/authentication/signin']);
//                         // }
//                         this.loading = false;
//                     }, 1000);
//
//                 } else {
//                     this.error = 'Invalid Login';
//                 }
//             },
//             (error) => {
//                 alert(error)
//                 this.error = error;
//                 this.submitted = false;
//                 this.loading = false;
//                 console.log(error)
//             }
//         );
//     }
// }
