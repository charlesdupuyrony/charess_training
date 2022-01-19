import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import {Router} from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    paths =['/api/user', '/api/place', '/api/user/password', '/api/authenticate'];

    constructor(private authenticationService: AuthService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const url = request.url;
        let ck = false;

        console.log('-----------------------------------------------------', url);

        if(!this.authenticationService.isTokenValid()){
            this.paths.forEach(p => {
                if(url.includes(p) === true){
                    ck = url.includes(p);
                    return;
                }
            });
            if(!ck){
                this.router.navigate(['/authentication/signin']);
            }
        }

        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                }
            });
        }
        return next.handle(request);
    }
}
