import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
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

  login(credentials) {
      let data = 'username=' + encodeURIComponent(credentials.username) +
          '&password=' + encodeURIComponent(credentials.password);
      return this.http.post(environment.auth, data, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          }
      });
  }


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
