import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {Institution} from "./institution.model";
import {environment} from "../../../environments/environment";

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

    getLocations(criteria:string){
        return this.http.get<Location[]>(`${environment.api}/location/${criteria}`);
    }


}
