import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import {InstitutionRoutingModule} from "./institution-routing.module";
import {InstitutionService} from "./institution.service";
import {InstitutionPageComponent} from "./page/institution.page.component";
import {TranslateModule} from "@ngx-translate/core";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {InstitutionFormComponent} from "./form/institution.form.component";

@NgModule({
    declarations: [
        InstitutionPageComponent,
        InstitutionFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatSortModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatTabsModule,
        MaterialFileInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        TranslateModule,
        InstitutionRoutingModule,
        NgxDatatableModule,
    ],
    providers: [InstitutionService]
})

export class InstitutionModule {}
