import {MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.confirm.html'
})

export class DeleteComponent {
    constructor(public dialog: MatDialogRef<DeleteComponent>) {}

    cancel(): void {
        this.dialog.close();
    }

    confirm(): void {
    }
}
