import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auto',
    },
    {
        path: 'auto',
        component: TaskOneComponent
    },
    {
        path: 'manual',
        component: TaskTwoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
