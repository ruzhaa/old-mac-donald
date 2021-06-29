import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    pageTitle = 'Dashboard';

    constructor(
        private _titleService: Title
    ) {
        this._titleService.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
    }

}
