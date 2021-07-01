import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'tasks',
        loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
