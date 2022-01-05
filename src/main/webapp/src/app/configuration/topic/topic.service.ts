import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {Institution} from "./institution.model";
import {environment} from "../../../environments/environment";
import {Location} from "../../core/models/security/location";


@Injectable()
export class InstitutionService extends UnsubscribeOnDestroyAdapter {

    constructor(private http: HttpClient) {
        super();
    }

    getInstitutions(){
        return this.http.get<Institution[]>(`${environment.api}/place`);
    }

    deleteInstitution(id:number){
        return this.http.delete(`${environment.api}/place/${id}`);
    }

    getLocations(){
        return this.http.get<Location[]>(`${environment.api}/location`);
    }


}
