import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {Institution} from "./institution.model";

@Injectable()
export class InstitutionService extends UnsubscribeOnDestroyAdapter {

    constructor(private http: HttpClient) {
        super();
    }

    getInstitutions(){
        return this.http.get<Institution[]>("http://localhost:8080/api/place");
    }

    deleteInstitution(id:number){
        return this.http.delete(`http://localhost:8080/api/place/${id}`);
    }
}
