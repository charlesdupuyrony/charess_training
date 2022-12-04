import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { SelectionModel } from '@angular/cdk/collections';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {Training} from "../../../core/models/training/training";
import {TrainingService} from "../../../core/service/training.service";

@Component({
    selector: 'app-page',
    templateUrl: './demands.page.component.html',
    styleUrls: ['./demands.page.component.css'],
})

export class DemandsPageComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

    displayedColumns = [
        'select',
        'title',
        'attendee',
        'startDate',
        'endDate',
        'place',
        'status',
        'creator',
        'created'
    ];

    database: TrainingService | null;
    datasource: Source | null;
    selection = new SelectionModel<Training>(true, []);
    training: Training | null;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('filter', { static: true }) filter: ElementRef;
    @ViewChild(MatMenuTrigger)
    contextMenu: MatMenuTrigger;
    contextMenuPosition = {x:'0px', y:'0px'};

    constructor(private http: HttpClient){
        super();
    }

    private load(){
        this.database = new TrainingService(this.http);
        this.datasource = new Source(this.database, this.paginator, this.sort);
        this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(() => {
            if(!this.datasource)
                return;
            this.datasource.filter = this.filter.nativeElement.value;
        });
    }

    ngOnInit(){
        this.load();
    }

    format(o){
        switch (o) {
            case 'TRAINING_REQUESTED': return 'Demandée';
            case 'TRAINING_VALIDATED': return 'Validée';
            case 'TRAINING_REJECTED': return 'Rejetée';
            case 'TRAINING_PENDING': return 'En cours';
            case 'TRAINING_COMPLETED': return 'Complétée';
            case 'TRAINING_UNCOMPLETED': return 'Inachevée';
        }
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.datasource.renderedData.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected()? this.selection.clear(): this.datasource.renderedData.forEach((row) => this.selection.select(row));
    }

}

export class Source extends DataSource<Training> {

    filterChange = new BehaviorSubject('');

    get filter(): string {
        return this.filterChange.value;
    }

    set filter(filter: string) {
        this.filterChange.next(filter);
    }

    filteredData: Training[] = [];
    renderedData: Training[] = [];

    constructor(public service: TrainingService, public paginator: MatPaginator, public ms: MatSort){
        super();
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }

    connect(): Observable<Training[]>{
        const displayDataChanges = [
            this.service.dataChange,
            this.ms.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.service.getTrainings();
        return merge(...displayDataChanges).pipe(
            map(() => {
                this.filteredData = this.service.data
                    .slice()
                    .filter((t: Training) => {
                        const search = (
                            t?.topic.title
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

    sortData(data: Training[]): Training[] {
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
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (
                (valueA < valueB ? -1 : 1) * (this.ms.direction === 'asc' ? 1 : -1)
            );
        });
    }

}
