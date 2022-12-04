import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {UnsubscribeOnDestroyAdapter} from "../../../shared/UnsubscribeOnDestroyAdapter";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TrainingService} from "../../../organisation/training/training.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatMenuTrigger} from "@angular/material/menu";
import {DataSource, SelectionModel} from "@angular/cdk/collections";
import {BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import {AuthService} from "../../../core/service/auth.service";
import {Institution} from "../../../core/models/security/institution";
import {map} from "rxjs/operators";
import {TrainingPartner} from "../../../core/models/training/training.partner";

@Component({
    selector: 'app-page',
    templateUrl: './participants.training.component.html',
    styleUrls: ['./participants.training.component.scss']
})

export class ParticipantsTrainingComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

    displayedColumns = [
        'status',
        'topic',
        'startDate',
        'endDate',
        'categories',
        'capacity'
    ];

    database: TrainingService | null;
    datasource: Source | null;
    profiles=[];
    dim = {
        width: '1200px',
        height: '420px'
    };

    partner: Institution;

    constructor(public http: HttpClient, public dialog: MatDialog, private snack: MatSnackBar, private factory: TrainingService, private router: Router, private auth: AuthService){
        super();
        this.partner = auth.currentUserValue?.institution;
    }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('filter', { static: true }) filter: ElementRef;
    @ViewChild(MatMenuTrigger)
    contextMenu: MatMenuTrigger;
    contextMenuPosition = { x: '0px', y: '0px' };

    public load() {
        this.database = new TrainingService(this.http);
        this.datasource = new Source(this.database, this.paginator, this.sort, this.partner);
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

    submitParticipants(row){
        localStorage.setItem("trainingPartner", JSON.stringify(row));
        this.router.navigate(['partnership/participants/submission'],{state:{trainingPartner: row}});

        // localStorage.setItem("partner", JSON.stringify(this.partner));
        // localStorage.setItem("training", JSON.stringify(row.training));
        // this.router.navigate(['partnership/participants/submission'],{state:{training:row.training, partner: this.partner}});
    }
}


export class Source extends DataSource<TrainingPartner> {

    filterChange = new BehaviorSubject('');

    get filter(): string {
        return this.filterChange.value;
    }

    set filter(filter: string) {
        this.filterChange.next(filter);
    }

    filteredData: TrainingPartner[] = [];
    renderedData: TrainingPartner[] = [];

    constructor(public service: TrainingService, public paginator: MatPaginator, public ms: MatSort, public partner: Institution){
        super();
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }

    connect(): Observable<TrainingPartner[]>{
        const displayDataChanges = [
            this.service.dataPartnerChange,
            this.ms.sortChange,
            this.filterChange,
            this.paginator.page,
        ];

        this.service.getTrainingsForAPartner(this.partner?.id);
        return merge(...displayDataChanges).pipe(
            map(() => {
                this.filteredData = this.service.partnerData
                    .slice()
                    .filter((tp: TrainingPartner) => {
                        const search = (
                            tp.training.topic.title
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

    sortData(data: TrainingPartner[]): TrainingPartner[] {
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
                case 'title':
                    [propertyA, propertyB] = [a.training.topic.title, b.training.topic.title];
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
