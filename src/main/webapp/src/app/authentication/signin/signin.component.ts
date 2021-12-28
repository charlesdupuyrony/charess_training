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
    authForm: FormGroup;
    submitted = false;
    loading = false;
    error = '';
    hide = true;

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthService){
      super();
    }

    get f() {
        return this.authForm.controls;
    }

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

  // adminSet() {
  //   this.authForm.get('username').setValue('admin@school.org');
  //   this.authForm.get('password').setValue('admin@123');
  // }
  //
  // teacherSet() {
  //   this.authForm.get('username').setValue('teacher@school.org');
  //   this.authForm.get('password').setValue('teacher@123');
  // }
  // studentSet() {
  //   this.authForm.get('username').setValue('student@school.org');
  //   this.authForm.get('password').setValue('student@123');
  // }

    onSubmit() {
        this.submitted = true;
        this.loading = true;
        this.error = '';
        if(this.authForm.invalid) {
            this.error = 'Username and/or Password not valid Casimir!';
            return;
        }
        this.authService.login({username:this.f.username.value, password: this.f.password.value})
            .subscribe(user=> {alert(user)});
        alert(22);

        // else {
        //     this.subs.sink = this.authService.login({username:this.f.username.value, password: this.f.password.value})
        //     .subscribe((res) => {
        //         if (res) {
        //             setTimeout(() => {
        //                 const role = this.authService.currentUserValue.profile.role;
        //                 console.log(this.authService.currentUserValue, '===========')
        //                 alert();
        //                 if (role === Role.SUPER || role === Role.ADMIN) {
        //                     this.router.navigate(['/admin/dashboard/main']);
        //                 } else if (role === Role.ORGANISER) {
        //                     this.router.navigate(['/teacher/dashboard']);
        //                 } else if (role === Role.ATTENDEE) {
        //                     this.router.navigate(['/student/dashboard']);
        //                 } else {
        //
        //                     //this.router.navigate(['/authentication/signin']);
        //                 }
        //                 this.loading = false;
        //             }, 1000);
        //         } else {
        //             this.error = 'Invalid Login';
        //             alert('====2=======');
        //
        //         }
        //     },
        //     (error) => {
        //         console.log(error, '---------------------------------------------------------')
        //         this.error = error;
        //         this.submitted = false;
        //         this.loading = false;
        //     }
        //     );
        // }
    }

}
