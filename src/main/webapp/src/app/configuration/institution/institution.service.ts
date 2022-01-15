import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {Institution, Manager} from "./institution.model";
import {environment} from "../../../environments/environment";
import {Location} from "../../core/models/security/location";


@Injectable()
export class InstitutionService extends UnsubscribeOnDestroyAdapter {

    api = `${environment.api}/place`;

    constructor(private http: HttpClient) {
        super();
    }

    getInstitutions(){
        return this.http.get<Institution[]>(this.api);
    }

    getPlaces(criteria: string){
        return this.http.get<Institution[]>(`${this.api}/search/${criteria}`);
    }

    save(place){
        return this.http.post(this.api, place);
    }

    getLocations(criteria: string){
        return this.http.get<Location[]>(`${environment.api}/location/search/${criteria}`);
    }


    deleteInstitution(id: number){
        return this.http.delete(`${environment.api}/place/${id}`);
    }



    getIdentifierOrEmail(criteria){
        return this.http.get<Manager>(`${environment.api}/place/getManagerByIdentifierOrEmail?criteria=${criteria}`);
    }


    edit(place){
        return this.http.put(this.api, place);
    }
}
