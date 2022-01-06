import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {environment} from "../../../environments/environment";
import {Topic} from "./topic.model";
import {Teachers} from "../../admin/teachers/all-teachers/teachers.model";


@Injectable()
export class TopicService extends UnsubscribeOnDestroyAdapter {

    api = `${environment.api}/topic`;

    constructor(private http: HttpClient) {
        super();
    }

    getTopics(){
        console.log(this.api)
        return this.http.get<Topic[]>(this.api);
    }

    deleteTopic(id:number){
        return this.http.delete(`${this.api}/${id}`);
    }

    addTopic(topic: Topic){
        return this.http.post(this.api, topic);

        // console.log(topic);
        // this.http.post(`${environment.api}/topic`, topic).subscribe(
        //     data => {
        //         console.log(data, 'tout se passe bien')
        //     },
        //     (err: HttpErrorResponse) => {
        //         console.log(err, '-------error-------');
        // });
    }

}
