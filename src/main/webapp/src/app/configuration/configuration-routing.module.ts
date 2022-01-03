import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'institution',
        loadChildren: () =>
            import('./institution/institution.module').then((m) => m.InstitutionModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ConfigurationRoutingModule {}
