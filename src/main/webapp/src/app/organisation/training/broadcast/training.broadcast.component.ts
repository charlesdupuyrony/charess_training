import {Component, OnInit} from "@angular/core";
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup, Validators
} from "@angular/forms";
import {Observable, map} from "rxjs";
import {startWith} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {TrainingService} from "../training.service";
import {Topic} from "../../../core/models/training/topic";
import {Institution} from "../../../core/models/security/institution";
import {Training} from "../../../core/models/training/training";
import {InstitutionService} from "../../../configuration/institution/institution.service";
import {TopicService} from "../../../configuration/topic/topic.service";
import {TopicFormComponent} from "../../../configuration/topic/form/topic.form.component";
import {MatDialog} from "@angular/material/dialog";
import {Person} from "../../../core/models/security/person";

@Component({
    selector: 'app-form',
    templateUrl: './training.broadcast.component.html',
    styleUrls: ['./training.broadcast.component.scss']
})

export class TrainingBroadcastComponent implements OnInit {

    fg: FormGroup;
    topics: Observable<Topic[]>;
    topic = new FormControl();
    topicArray = [];

    locations: Observable<Institution[]>;
    location = new FormControl();
    locationArray = [];

    categories = new FormControl();
    categoryArray = [];

    partners = new FormControl();
    partnerArray = [];

    dim = {
        width: '1000px',
        height: '380px'
    };
    loading = false;

    constructor(private fb: FormBuilder, private router: Router, private service: TrainingService, private topicService: TopicService,
                private placeService: InstitutionService, private snack: MatSnackBar, public dialog: MatDialog){

        const st = this.router.getCurrentNavigation().extras.state;
        let trn = (st && st.training)?st.training: new Training({});

        this.topic.setValue(trn.topic);
        this.location.setValue(trn.location);
        this.fg = this.fb.group(trn, {validator: this.datesValidator('startDate', 'endDate')});


        // this.partners.setValue(trn.partners);
        // console.log(trn.partners, "-----------------------------------");

        // this.partners = trn.partners;
        // this.categories.setValue(trn.categories);

        // this.fg = this.fb.group(new Training({}), {validator: this.datesValidator('startDate', 'endDate')});

        // const st = this.router.getCurrentNavigation().extras.state;
        // this.title = st?'Edit the current institution':'Create new institution';
        // let pl = (st && st.place)?st.place: new Institution({});
        // pl.managers = this.fb.array(pl.managers==null?[this.fb.group(new Person({}))]: pl.managers.map(m=>this.fb.group(m)));
        // if(pl && pl.parent)
        //     this.parent.setValue(pl.parent);
        // if(pl && pl.locationAddress)
        //     this.locationAddress.setValue(pl.locationAddress);
        // this.fg = this.fb.group(pl);

    }

    ngOnInit(){
        this.topics = this.topic.valueChanges.pipe(startWith(''),
            map(value => {
                if(typeof value==='string' && value.trim().length < 1)
                    return [];
                this.service.getTopics(typeof value==='string'?value.toLowerCase():value.name).subscribe((res)=>{
                    this.topicArray = res;
                });
                return this.topicArray;
            })
        );

        this.locations = this.location.valueChanges.pipe(startWith(''),
            map(value => {
                if(typeof value==='string' && value.trim().length < 1)
                    return [];
                this.service.getLocations(typeof value==='string'?value.toLowerCase():value.name).subscribe((res)=>{
                    this.locationArray = res;
                });
                return this.locationArray;
            })
        );

        this.service.getCategories('').subscribe((res)=>{
            this.categoryArray = res;
        });

        this.placeService.getPlaces('').subscribe((res)=>{
            this.partnerArray = res;
        });
    }

    datesValidator(startDate: string, endDate: string){
        return (formGroup: FormGroup) => {
            const start = formGroup.controls[startDate];
            const end = formGroup.controls[endDate];
            if (end.errors && !end.errors.datesValidator) {
                return;
            }
            if (new Date(start.value) > new Date(end.value)) {
                end.setErrors({ datesValidator: true });
            } else {
                end.setErrors(null);
            }
        }
    }

    // updatePartners(){
    //     if(this.partnerArray.length > 0 && typeof this.location.value !='string'){
    //         this.partnerArray = this.partnerArray.filter(p => p.id != this.location.value?.id);
    //     }
    // }

    completion(t){
        // this.router.navigate(['/organisation/training/broadcast-completion'], {state: {training: t}});
        this.router.navigate(['/organisation/training/page']);
    }

    initialize(){}

    private toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }

    private success(t){
        this.loading = false;
        this.toast('bg-green','The user has been successfully created');
        this.completion(t);
    }

    private error(err: HttpErrorResponse){
        this.loading = false;
        this.toast('bg-red','Something went wrong the usr has not been created. Please, try again!');
        console.error(err);
    }

    display(ob): string {
        if(!ob)
            return;
        return ob.fullname?ob.fullname:(ob.name?ob.name:ob.title);
    }

    submit(ob: any): void {
        this.loading = true;
        ob.topic = this.topic.value;
        ob.location = this.location.value;
        ob.categories = this.categories.value;
        ob.partners = this.partners.value;

        this.service.broadcast(ob).subscribe(
            (res) => this.success(res),
            (err) => this.error(err)
        );
    }

    cancel(): void {
        // this.fm.close();
    }

    goToList() {
        this.router.navigate(['organisation/training/page']);
    }

    add(){
        const dialogRef = this.dialog.open(TopicFormComponent, {
            ...this.dim,
            data: {
                topic: this.topic,
                action: 'add',
            }
        });
    }
}
