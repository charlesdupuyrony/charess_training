import {Component, OnInit} from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup
} from "@angular/forms";
import {Observable, map} from "rxjs";
import {startWith} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {TrainingService} from "../../core/service/training.service";
import {Training} from "../../core/models/training/training";
import {Topic} from "../../core/models/training/topic";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-form',
    templateUrl: './request.form.component.html'
})

export class RequestFormComponent implements OnInit {

    fg: FormGroup;
    topics: Observable<Topic[]>;
    topic = new FormControl();
    topicArray = [];
    categories = [];

    // place: Institution;
    // parent = new FormControl();
    // locationAddress = new FormControl();
    // places: Observable<Institution[]>;
    // locations: Observable<Location[]>;
    // placeArray = [];
    // locationArray = [];
    // isIdentifierDuplicated = [];
    // isEmailDuplicated = [];
    // msg: string;

    constructor(private fb: FormBuilder, private service: TrainingService, private snack: MatSnackBar, private router: Router){
        this.fg = this.fb.group(new Training({}));
    }

    ngOnInit(){
        this.service.categories().subscribe((res)=>{
            this.categories = res;
        });
        this.topics = this.topic.valueChanges.pipe(startWith(''),
            map(value => {
                if(typeof value==='string' && value.trim().length < 1)
                    return [];
                this.service.topics(typeof value==='string'?value.toLowerCase():value.title).subscribe((res)=>{
                    this.topicArray = res;
                });
                return this.topicArray;
            })
        );
    }

    display(ob): string {
        if(!ob)
            return;
        return ob.title;
    }

    compare(a, b): boolean {
        return a && b ?(a.id && b.id && a.id===b.id):a===b;
    }

    private toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }

    private success(res){
        this.toast('bg-green','The usr has been successfully created');
        this.router.navigate(['partnership/request/timeline'],{state:{training: res}});
    }

    private error(err: HttpErrorResponse){
        this.toast('bg-red','Something went wrong the usr has not been created. Please, try again!');
        console.error(err);
    }

    submit(ob: any): void {
        ob.topic = this.topic.value;
        this.service.save(ob).subscribe(
            (res) => this.success(res),
            (err) => this.error(err)
        );
    }



    //


    //

    //
    // back(){
    //     this.router.navigate(['configuration/institution/page']);
    // }
    //
    // get managers(): FormArray {
    //     return this.fg.get('managers') as FormArray;
    // }
    //
    // private chkIdent(arr, index){
    //     const ident = arr[index].identifier;
    //     this.isIdentifierDuplicated = arr.map(e => false);
    //     for(let i=0; i< arr.length; i++){
    //         if(i != index && arr[i].identifier===ident){
    //             this.isIdentifierDuplicated[index] = true;
    //             this.msg = ' (existed in present pool)';
    //             return;
    //         }
    //     }
    //     this.service.getPerson(ident).subscribe(res => {
    //         if(res != null){
    //             this.pull(index);
    //             this.managers.controls.unshift(this.fb.group(res));
    //         }
    //     });
    //
    // }
    //
    // private chkEmail(arr, index){
    //     const mail = arr[index].email;
    //     this.isEmailDuplicated = arr.map(e => false);
    //     for(let i=0; i< arr.length; i++){
    //         if(i != index && arr[i].email===mail){
    //             this.isEmailDuplicated[index] = true;
    //             this.msg = ' (existed in present pool)';
    //             return;
    //         }
    //     }
    //     this.service.getPerson(mail).subscribe(res => {
    //         if(res != null){
    //             this.managers.controls[index].setValue(this.fb.group(res));
    //         }
    //     });
    // }
    //
    // check(index, field){
    //     let arr = this.managers.getRawValue();
    //     return field==='identifier'?this.chkIdent(arr, index):this.chkEmail(arr, index);
    //
    // }
    //
    // push(){
    //     this.managers.controls.unshift(this.fb.group(new Person({})));
    // }
    //
    // pull(index: number): void {
    //     if (this.managers.length > 1)
    //         this.managers.removeAt(index);
    // }
}
