import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UnsubscribeOnDestroyAdapter} from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {environment} from "../../../environments/environment";
import {Category} from "../../core/models/security/category";

@Injectable()
export class CategoryService extends UnsubscribeOnDestroyAdapter {

    api = `${environment.api}/category`;

    constructor(private http: HttpClient) {
        super();
    }

    getCategories(){
        return this.http.get<Category[]>(this.api);
    }

    delete(id:number){
        return this.http.delete(`${this.api}/${id}`);
    }

    create(category: Category){
        return this.http.post(this.api, category);
    }
}
