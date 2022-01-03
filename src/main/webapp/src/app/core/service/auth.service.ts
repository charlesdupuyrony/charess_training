import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/security/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})


export class AuthService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.auth}`, {username, password})
        .pipe(
            map((user) => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                sessionStorage.setItem("username", user.username);
                sessionStorage.setItem("token", "Bearer " + user.token);
                return user;
            })
        );
    }

    tokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }

    isTokenValid(){
        let user = sessionStorage.getItem("username");
        let chk = !(user===null);
        if(chk) {
            chk = !this.tokenExpired(sessionStorage.getItem("token"));
        }
        return chk;
    }

    logout() {
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem("username");
        this.currentUserSubject.next(null);
        return of({ success: false });
    }

}
