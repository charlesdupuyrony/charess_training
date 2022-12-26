import {Training} from "../../core/models/training/training";
import {Injectable} from "@angular/core";
import {UnsubscribeOnDestroyAdapter} from "../../shared/UnsubscribeOnDestroyAdapter";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from 'rxjs';
import {Topic} from "../../core/models/training/topic";
import {Institution} from "../../core/models/security/institution";
import {Category} from "../../core/models/security/category";
import {TrainingPartner} from "../../core/models/training/training.partner";
import {Person} from "../../core/models/security/person";

@Injectable()
export class TrainingService extends UnsubscribeOnDestroyAdapter {

    api = `${environment.api}`;
    apiTraining = `${this.api}/training`;

    isTblLoading = true;
    dataChange: BehaviorSubject<Training[]> = new BehaviorSubject<Training[]>([]);
    dataPartnerChange: BehaviorSubject<TrainingPartner[]> = new BehaviorSubject<TrainingPartner[]>([]);
    dialogData: any;

    constructor(private http: HttpClient) {
        super();
    }

    get data(): Training[] {
        return this.dataChange.value;
    }

    get partnerData(): TrainingPartner[] {
        return this.dataPartnerChange.value;
    }

    setDialogData(training) {
        this.dialogData = training;
    }

    getDialogData() {
        return this.dialogData;
    }

    getTrainings(): void {
        this.subs.sink = this.http.get<Training[]>(this.apiTraining).subscribe(
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

    getTopics(criteria:string){
        return this.http.get<Topic[]>(`${this.api}/topic/${criteria}`);
    }

    getLocations(criteria:string){
        return this.http.get<Institution[]>(`${this.api}/place/${criteria}`);
    }

    getCategories(criteria:string){
        return this.http.get<Category[]>(`${this.api}/category`);
    }

    broadcast(training){
        return this.http.post(`${this.api}/training/broadcast`, training);
    }

    status(training){
        return this.http.post(`${this.api}/training/status`, training);
    }

    getTrainingsForAPartner(partnerId: number){
        const url = partnerId?`${this.apiTraining}/partner/${partnerId}`:`${this.apiTraining}`;
        this.subs.sink = this.http.get<TrainingPartner[]>(url).subscribe(
            (data) => {
                this.isTblLoading = false;
                this.dataPartnerChange.next(data);
            },
            (error: HttpErrorResponse) => {
                this.isTblLoading = false;
                console.log(error.name + ' ' + error.message);
            }
        );
    }

    participate(partnerTrainingParticipants){
        return this.http.post(`${this.api}/participant`, partnerTrainingParticipants);
    }

    getPersonByIdentifier(nif){
        return this.http.get<Person>(`${environment.api}/user/nif?nif=${nif}`);
    }

    getPersonByEmail(email){
        return this.http.get<Person>(`${environment.api}/user/email?email=${email}`);
    }

}