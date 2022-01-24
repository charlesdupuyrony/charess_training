import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'demands',
        loadChildren: () =>
            import('./demands/demands.module').then((m) => m.DemandsModule),
    },
    {
        path: 'calendar',
        loadChildren: () =>
            import('./calendar/calendar.module').then((m) => m.CalendarModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class OrganisationRoutingModule {}
