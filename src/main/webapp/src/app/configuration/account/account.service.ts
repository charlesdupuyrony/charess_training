import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {environment} from "../../../environments/environment";
import {User} from "../../core/models/security/user";
import {Profile} from "../../core/models/security/profile";
import {Institution} from "../institution/institution.model";

@Injectable()
export class AccountService extends UnsubscribeOnDestroyAdapter {

    api = `${environment.api}/user`;

    isTblLoading = true;
    dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    dialogData: any;

    constructor(private http: HttpClient) {
        super();
    }

    getInstitutions(){
        return this.http.get<Institution[]>(`${environment.api}/place`);
    }

    getProfiles(){
        return this.http.get<Profile[]>(`${this.api}/profile`);
    }

    get data(): User[] {
        return this.dataChange.value;
    }

    setDialogData(usr) {
        this.dialogData = usr;
    }


    getDialogData() {
        return this.dialogData;
    }

    getUsers(): void {
        this.subs.sink = this.http.get<User[]>(this.api).subscribe(
            (data) => {
                this.isTblLoading = false;
                this.dataChange.next(data);
            },
            (error: HttpErrorResponse) => {
                this.isTblLoading = false;
                console.log(error.name + ' ' + error.message);
            }
        );
    }

    create(usr: User){
        return this.http.post(this.api, usr);
    }

    update(users: User[]){
        return this.http.post(`${this.api}/update`, users);
    }


    
    // addTeachers(teachers: User): void {
    //     alert(1);
    //     this.dialogData = teachers;
    //
    //     /*  this.httpClient.post(this.API_URL, teachers).subscribe(data => {
    //       this.dialogData = teachers;
    //       },
    //       (err: HttpErrorResponse) => {
    //      // error code here
    //     });*/
    // }
    // updateTeachers(teachers: User): void {
    //     this.dialogData = teachers;
    //
    //     /* this.httpClient.put(this.API_URL + teachers.id, teachers).subscribe(data => {
    //       this.dialogData = teachers;
    //     },
    //     (err: HttpErrorResponse) => {
    //       // error code here
    //     }
    //   );*/
    // }
    // deleteTeachers(id: number): void {
    //     console.log(id);
    //
    //     /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
    //       console.log(id);
    //       },
    //       (err: HttpErrorResponse) => {
    //          // error code here
    //       }
    //     );*/
    // }
}
