import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountPageComponent} from "./page/account.page.component";

const routes: Routes = [
    {
        path: 'page',
        component: AccountPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AccountRoutingModule {}
