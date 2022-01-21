import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MatSnackBar } from '@angular/material/snack-bar';
import {InstitutionService} from "../institution.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {UnsubscribeOnDestroyAdapter} from "../../../shared/UnsubscribeOnDestroyAdapter";
import {DeleteComponent} from "../../delete/delete.confirm";
import {HttpErrorResponse} from "@angular/common/http";
import {Institution} from "../../../core/models/security/institution";

@Component({
    selector: 'app-page',
    templateUrl: './institution.page.component.html'
})

export class InstitutionPageComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

    @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
    @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
    rows = [];
    data = [];
    institution: Institution | null;
    filteredData = [];
    columns = [
        { name: 'name' },
        { name: 'address' }
    ];

    constructor(private service: InstitutionService, private snack: MatSnackBar, public dialog: MatDialog, private router: Router) {
        super();
    }

    ngOnInit() {
        this.set();
    }

    set(){
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

    delete(row): void {
        const dialogRef = this.dialog.open(DeleteComponent, {});
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                this.service.deleteInstitution(row.id).subscribe(
                    (res) => this.success(),
                    (err: HttpErrorResponse)=>this.error(err)
                );
                this.set();
            }
        });

    }

    private toast(color, text) {
        this.snack.open(text, '', {
            duration: 2000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: color,
        });
    }

    success(){
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/configuration/institution/page']);
        });
        this.toast('bg-green','That record has been successfully deleted');
    }

    private error(err:HttpErrorResponse){
        this.toast('bg-red','That record is in use somewhere, you have to delete its dependance first!');
        console.error(err);
    }

    add(){
        this.router.navigate(['configuration/institution/form']);
    }

    edit(row){
        this.router.navigate(['configuration/institution/form'],{state:{place: row}});
    }
}
