import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-task-two',
    templateUrl: './task-two.component.html',
    styleUrls: ['./task-two.component.scss']
})
export class TaskTwoComponent implements OnInit {
    pageTitle = 'Task two - manual mode';

    constructor(
        private _titleService: Title
    ) {
        this._titleService.setTitle(this.pageTitle);
    }

    ngOnInit(): void { }

}
