import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {UnsubscribeOnDestroyAdapter} from "../../../shared/UnsubscribeOnDestroyAdapter";
import {InstitutionService} from "../institution.service";
import {DataSource} from "@angular/cdk/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Institution} from "../../../core/models/security/institution";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatMenuTrigger} from "@angular/material/menu";
import {BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {DeleteComponent} from "../../delete/delete.confirm";

@Component({
    selector: 'app-page',
    templateUrl: './institution.page.component.html',
    styleUrls: ['./institution.page.component.scss']
})

export class InstitutionPageComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

    displayedColumns = [
        'name',
        'address',
        'managers',
        // 'parent',
        'actions',
    ];

    database: InstitutionService | null;
    datasource: Source | null;
    selection = new SelectionModel<Institution>(true, []);
    institution: Institution | null;
    profiles=[];
    dim = {
        width: '1200px',
        height: '420px'
    };

    constructor(public http: HttpClient, public dialog: MatDialog, private snack: MatSnackBar, private factory: InstitutionService, private router: Router){
        super();
    }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('filter', { static: true }) filter: ElementRef;
    @ViewChild(MatMenuTrigger)
    contextMenu: MatMenuTrigger;
    contextMenuPosition = { x: '0px', y: '0px' };

    public load() {
        this.database = new InstitutionService(this.http);
        this.datasource = new Source(this.database, this.paginator, this.sort);
        this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(
            () => {
                if (!this.datasource) {
                    return;
                }
                this.datasource.filter = this.filter.nativeElement.value;
            }
        );
    }

    ngOnInit() {
        this.load();
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

    delete(row): void {
        const dialogRef = this.dialog.open(DeleteComponent, {});
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                this.factory.deleteInstitution(row.id).subscribe(
                    (res) => this.success(),
                    (err: HttpErrorResponse)=>this.error(err)
                );
                this.load();
            }
        });
    }

    displayManagers(managers) {
        let display = '';
        if (managers.length > 0) {
            if (managers.length == 1) {
                display = managers[0].fullname;
            } else if (managers.length == 2){
                display = managers[0].fullname + ' & ' + managers[1].fullname;
            } else {
                display = managers[0].fullname + ' & ' +  (managers.length-1) + ' autres';
            }
        }
        return display;
    }
}


export class Source extends DataSource<Institution> {

    filterChange = new BehaviorSubject('');

    get filter(): string {
        return this.filterChange.value;
    }

    set filter(filter: string) {
        this.filterChange.next(filter);
    }

    filteredData: Institution[] = [];
    renderedData: Institution[] = [];

    constructor(public service: InstitutionService, public paginator: MatPaginator, public ms: MatSort){
        super();
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }

    connect(): Observable<Institution[]>{
        const displayDataChanges = [
            this.service.dataChange,
            this.ms.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.service.getInstitutions();
        return merge(...displayDataChanges).pipe(
            map(() => {
                this.filteredData = this.service.data
                    .slice()
                    .filter((institution: Institution) => {
                        const search = (
                            institution.name
                        ).toLowerCase();
                        return search.indexOf(this.filter.toLowerCase()) !== -1;
                    });
                const sortedData = this.sortData(this.filteredData.slice());
                const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
                this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
                return this.renderedData;
            })
        );
    }

    disconnect() {}

    sortData(data: Institution[]): Institution[] {
        if (!this.ms.active || this.ms.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';
            switch (this.ms.active) {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'name':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;

            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (
                (valueA < valueB ? -1 : 1) * (this.ms.direction === 'asc' ? 1 : -1)
            );
        });
    }

}
