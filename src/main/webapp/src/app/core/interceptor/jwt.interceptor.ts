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

    constructor(private authenticationService: AuthService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if(!this.authenticationService.isTokenValid()){
            this.router.navigate(['/authentication/signin']);
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
