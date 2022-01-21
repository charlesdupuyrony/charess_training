import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
} from '@angular/forms';

import { Observable, map } from 'rxjs';
import {CategoryService} from "../category.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Category} from "../../../core/models/security/category";

@Component({
    selector: 'app-form',
    templateUrl: './category.form.component.html'
})

export class CategoryFormComponent implements OnInit {

    title: string;
    fg: FormGroup;
    category: Category;

    constructor(public fm: MatDialogRef<CategoryFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public service: CategoryService,
                private fb: FormBuilder, private snack: MatSnackBar){
        this.title = data.edit?'Edit the Current Category':'New Category';
        this.fg = this.fb.group(data.category?data.category:new Category({}));
    }

    ngOnInit() {
    }

    display(category):string {
        if(category)
            return category.title;
    }

    submit() {
        this.service.create(this.fg.getRawValue()).subscribe(
            data => this.success(),
            (err: HttpErrorResponse)=>this.error(err)
        );
    }

    cancel(): void {
        this.fm.close();
    }

    private success(){
        this.toast('bg-green','The category has been successfully created');
    }

    private error(err:HttpErrorResponse){
        this.toast('bg-red','Something went wrong the category has not been created. Please, try again!');
        console.error(err);
    }

    private toast(color, text) {
        this.snack.open(text, '', {duration: 2000, verticalPosition: "top", horizontalPosition: "right", panelClass: color});
    }

}
