import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {
    FormControl,
    Validators,
    FormGroup,
    FormBuilder,
} from '@angular/forms';

import {startWith} from 'rxjs/operators';
import { Observable, map } from 'rxjs';
import {Topic} from "../topic.model";
import {TopicService} from "../topic.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-form',
    templateUrl: './topic.form.component.html'
})

export class TopicFormComponent implements OnInit {

    action: string;
    title: string;
    fg: FormGroup;
    topic: Topic;
    themeControl = new FormControl();
    themes=[];
    filteredThemes: Observable<Topic[]>;

    constructor(public fm: MatDialogRef<TopicFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
                public service: TopicService, private fb: FormBuilder, private _snackBar: MatSnackBar){
        this.action = data.action;
        if (this.action === 'edit') {
            this.topic = data.topic;
            this.title = this.topic.title;
        } else {
            this.title = 'New Topic';
            this.topic = new Topic({});
        }
        this.fg = this.createContactForm();
    }

    ngOnInit() {
        this.service.getTopics().subscribe((res)=>{
            this.themes = res;
            this.filteredThemes = this.themeControl.valueChanges.pipe(startWith(''), map(value => {
                return this._filter(value)
            }));
        });
    }

    _filter(value: string): Topic[] {
        return this.themes.filter(theme=>theme.title.toLowerCase().includes(typeof value === 'string'?value.toLowerCase():value));
    }

    display(topic):string {
        if(topic)
            return topic.title;
    }

    // formControl = new FormControl('', [
    //     Validators.required
    // ]);
    //
    // getErrorMessage() {
    //     return this.formControl.hasError('required')
    //         ? 'Required field'
    //         : this.formControl.hasError('email')
    //             ? 'Not a valid email'
    //             : '';
    // }

    createContactForm(): FormGroup {
        return this.fb.group(this.topic);
    }

    submit() {
    }

    cancel(): void {
        this.fm.close();
    }

    public save(): void {
        let obj = this.fg.getRawValue();
        obj.theme = this.themeControl.value;
        this.service.addTopic(obj).subscribe(
            data => this.success(),
            (err: HttpErrorResponse)=>this.error(err)
        );
    }

    private success(){
        this.showNotification('bg-green','The topic has been successfully created');
    }

    private error(err:HttpErrorResponse){
        this.showNotification('bg-red','Something went wrong the topic has not been created. Please, try again!');
        console.error(err);
    }

    private showNotification(colorName, text) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: colorName,
        });
    }




}
