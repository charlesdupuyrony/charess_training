import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import {InstitutionModule} from "./institution/institution.module";
import {TopicModule} from "./topic/topic.module";

@NgModule({
    declarations: [
    ],
    imports: [CommonModule, ConfigurationRoutingModule],
})

export class ConfigurationModule {}
