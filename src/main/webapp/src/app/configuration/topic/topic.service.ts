import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UnsubscribeOnDestroyAdapter} from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {environment} from "../../../environments/environment";
import {Topic} from "./topic.model";

@Injectable()
export class TopicService extends UnsubscribeOnDestroyAdapter {

    api = `${environment.api}/topic`;

    constructor(private http: HttpClient) {
        super();
    }

    getAllTopics(){
        return this.http.get<Topic[]>(this.api);
    }

    getTopics(criteria:string){
        return this.http.get<Topic[]>(`${this.api}/${criteria}`);
    }

    deleteTopic(id:number){
        return this.http.delete(`${this.api}/${id}`);
    }

    addTopic(topic: Topic){
        return this.http.post(this.api, topic);
    }

}
