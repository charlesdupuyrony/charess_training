import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
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

    login(credentials):Observable<User> {
        // let data = 'username:'+encodeURIComponent(credentials.username)+'&password='+encodeURIComponent(credentials.password);
        let data = {
            'username':credentials.username,
            'password':credentials.password
        }
        return this.http.post<any>("http://localhost:8080/authenticate", data)
            .pipe(
                map(userData => {
                    console.log(userData, '===========================');
                    sessionStorage.setItem("username", data.username);
                    let tokenStr = "Bearer " + userData.token;
                    sessionStorage.setItem("token", tokenStr);
                    return userData;
                })
            );
    }


    // getLoginData(): Observable<any>{
    //     return this.http.get('./json/login.json')
    //         .map((result: Response) => result.json())
    //         .catch(this.getError);
    // }

  //
  // login(username: string, password: string) {
  //     console.log(username, password, '-----------');
  //     return this.http.post<any>(environment.auth, {username: username, password: password}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  //     .pipe(
  //         map((user) => {
  //             console.log(user, '---------------------------');
  //             localStorage.setItem('currentUser', JSON.stringify(user));
  //             this.currentUserSubject.next(user);
  //             return user;
  //         })
  //     );
  // }

  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      return of({ success: false });
  }

}
