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
import {InstitutionService} from "../institution.service";

interface Gender {
    id: string;
    value: string;
}

@Component({
    selector: 'app-page',
    templateUrl: './institution.page.component.html',
    styleUrls: ['./institution.page.component.sass'],
})

export class InstitutionPageComponent implements OnInit {

    @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
    @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
    rows = [];
    data = [];
    filteredData = [];

    columns = [
        { name: 'name' },
        { name: 'address' }
    ];

    constructor(private service: InstitutionService, private _snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.service.getInstitutions().subscribe(res => {
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
                if((item[cols[i].name] && item[cols[i].name].toString().toLowerCase().indexOf(val) !==-1) || !val)
                   return true;
            }
        });
        this.table.offset = 0;
    }

    deleteRow(row): void {
        this.service.deleteInstitution(row.id).subscribe(res => {
            this.data = this.arrayRemove(this.data, row.id);
            this.showNotification(
                'bg-red',
                'That record has been successfully deleted',
                'top',
                'right'
            );
        });
    }

    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }

    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }

    go(){
        console.log('----------------------------');
    }
}
