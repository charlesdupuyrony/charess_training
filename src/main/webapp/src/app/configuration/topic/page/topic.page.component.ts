import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog} from "@angular/material/dialog";
import {TopicService} from "../topic.service";
import {Topic} from "../topic.model";
import {TopicFormComponent} from "../form/topic.form.component";
import {UnsubscribeOnDestroyAdapter} from "../../../shared/UnsubscribeOnDestroyAdapter";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-page',
    templateUrl: './topic.page.component.html'
})

export class TopicPageComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

    @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
    @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
    rows = [];
    data = [];
    topic: Topic | null;

    filteredData = [];

    columns = [
        { title: 'title' },
        { theme: 'theme' }
    ];


    constructor(private service: TopicService, private _snackBar: MatSnackBar, public dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        this.set();
    }

    set(){
        this.service.getTopics().subscribe(res => {
            this.data = res;
            this.filteredData = res;
        });
    }

    filterDatatable(event){
        const val = event.target.value.toLowerCase();
        const cols = this.columns;
        const keys = Object.keys(this.filteredData[0]);
        this.data = this.filteredData.filter(function (item) {
            for (let i = 0; i < cols.length; i++) {
                if((item[cols[i].title] && item[cols[i].title].toString().toLowerCase().indexOf(val) !==-1) || !val)
                   return true;
            }
        });
        this.table.offset = 0;
    }

    deleteRow(row): void {
        this.service.deleteTopic(row.id).subscribe(
            res => this.success(row.id),
            (err: HttpErrorResponse)=>this.error(err)
        );
    }

    success(id){
        this.data = this.arrayRemove(this.data, id);
        this.showNotification('bg-red','That record has been successfully deleted');
    }

    private error(err:HttpErrorResponse){
        this.showNotification('bg-red','That record is in use somewhere, you have to delete its dependance first!');
        console.error(err);
    }

    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }

    showNotification(colorName, text) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: "top",
            horizontalPosition: "right",
            panelClass: colorName,
        });
    }


    add(){
        const dialogRef = this.dialog.open(TopicFormComponent, {
            width: '600px',
            data: {
                topic: this.topic,
                action: 'add',
            }
        });

        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                this.set();
            }
        });
    }

}
