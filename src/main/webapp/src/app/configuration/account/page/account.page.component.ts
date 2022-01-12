import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
import {AccountService} from "../account.service";
import {User} from "../../../core/models/security/user";
import {AccountFormComponent} from "../form/account.form.component";

@Component({
    selector: 'app-page',
    templateUrl: './account.page.component.html'
})

export class AccountPageComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

    displayedColumns = [
        'select',
        'username',
        'fullname',
        'profile',
        'email',
        'locale',
        'institution',
        'actions'
    ];
    database: AccountService | null;
    datasource: Source | null;
    selection = new SelectionModel<User>(true, []);
    usr: User | null;
    dim = {
        width: '1200px',
        height: '600px'
    };

    constructor(public http: HttpClient, public dialog: MatDialog, private snackBar: MatSnackBar, private accountService: AccountService){
        super();
    }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('filter', { static: true }) filter: ElementRef;
    @ViewChild(MatMenuTrigger)
    contextMenu: MatMenuTrigger;
    contextMenuPosition = { x: '0px', y: '0px' };

    public load() {
        this.database = new AccountService(this.http);
        this.datasource = new Source(this.database, this.paginator, this.sort);
        // this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(
        //     () => {
        //         if (!this.datasource) {
        //             return;
        //         }
        //         this.datasource.filter = this.filter.nativeElement.value;
        //     }
        // );
    }

    ngOnInit() {
        this.load();
    }

    add(){
        const dialogRef = this.dialog.open(AccountFormComponent, {
            ...this.dim,
            data: {
                usr: this.usr,
                action: 'add',
            }
        });
        this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                setTimeout(()=>{
                    this.database.dataChange.value.unshift(
                        this.accountService.getDialogData()
                    );
                    this.paginator._changePageSize(this.paginator.pageSize);
                }, 1500);
            }
        });
    }

    remove(){}
    edit(row){}
}


export class Source extends DataSource<User> {

    filterChange = new BehaviorSubject('');

    get filter(): string {
        return this.filterChange.value;
    }

    set filter(filter: string) {
        this.filterChange.next(filter);
    }

    filteredData: User[] = [];
    renderedData: User[] = [];

    constructor(public service: AccountService, public paginator: MatPaginator, public ms: MatSort){
        super();
        this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
    }

    connect(): Observable<User[]>{
        const displayDataChanges = [
            this.service.dataChange,
            this.ms.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.service.getUsers();
        return merge(...displayDataChanges).pipe(
            map(() => {
                this.filteredData = this.service.data
                    .slice()
                    .filter((usr: User) => {
                        const search = (
                            usr.username
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

    sortData(data: User[]): User[] {
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
                case 'username':
                    [propertyA, propertyB] = [a.username, b.username];
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