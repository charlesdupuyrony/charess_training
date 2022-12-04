import {Institution} from "../../core/models/security/institution";
import {Injectable} from "@angular/core";
import {UnsubscribeOnDestroyAdapter} from "../../shared/UnsubscribeOnDestroyAdapter";
import {environment} from "../../../environments/environment";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {Person} from "../../core/models/security/person";
import {Location} from "../../core/models/security/location";

@Injectable()
export class InstitutionService extends UnsubscribeOnDestroyAdapter {

    api = `${environment.api}/place`;

    isTblLoading = true;
    dataChange: BehaviorSubject<Institution[]> = new BehaviorSubject<Institution[]>([]);
    dialogData: any;

    constructor(private http: HttpClient) {
        super();
    }

    get data(): Institution[] {
        return this.dataChange.value;
    }

    setDialogData(institution) {
        this.dialogData = institution;
    }

    getDialogData() {
        return this.dialogData;
    }

    getInstitutions(): void {
        this.subs.sink = this.http.get<Institution[]>(this.api).subscribe(
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

    getPlaces(criteria:string){
        return this.http.get<Institution[]>(`${environment.api}/place/${criteria}`);
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

    getPerson(key){
        return this.http.get<Person>(`${environment.api}/user/person?key=${key}`);
    }

    getPersonByEmail(email){
        return this.http.get<Person>(`${environment.api}/user/email?email=${email}`);
    }
}
