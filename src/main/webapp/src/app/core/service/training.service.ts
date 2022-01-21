import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {Training} from "../models/training/training";
import {environment} from "../../../environments/environment";
import {Topic} from "../models/training/topic";

@Injectable()
export class TrainingService extends UnsubscribeOnDestroyAdapter {

    api = `${environment.api}/training`;

    isTblLoading = true;
    dataChange: BehaviorSubject<Training[]> = new BehaviorSubject<Training[]>([]);
    dialogData: any;

    constructor(private http: HttpClient) {
        super();
    }

    getTopics(criteria:string){
        return this.http.get<Topic[]>(`${environment.api}/topic/${criteria}`);
    }

    get data(): Training[] {
        return this.dataChange.value;
    }

    getTrainings(): void {
        // this.subs.sink = this.http.get<User[]>(this.api).subscribe(
        //     (data) => {
        //         this.isTblLoading = false;
        //         this.dataChange.next(data);
        //     },
        //     (error: HttpErrorResponse) => {
        //         this.isTblLoading = false;
        //         console.log(error.name + ' ' + error.message);
        //     }
        // );
    }

}