import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/shared';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';


@NgModule({
    declarations: [TaskOneComponent, TaskTwoComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,

        SharedModule
    ]
})
export class TasksModule {
}
