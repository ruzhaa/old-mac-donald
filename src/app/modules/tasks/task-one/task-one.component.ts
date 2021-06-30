import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Cat, Hen, Horse, IAnimal, Pig, Sheep } from 'src/app/shared';

@Component({
    selector: 'app-task-one',
    templateUrl: './task-one.component.html',
    styleUrls: ['./task-one.component.scss']
})
export class TaskOneComponent implements OnInit {
    pageTitle = 'Task one - auto mode';

    animals: IAnimal[] = [
        new Cat(),
        new Sheep(),
        new Hen(),
        new Pig(),
        new Horse()
    ];

    constructor(
        private _titleService: Title
    ) {
        this._titleService.setTitle(this.pageTitle);
    }

    ngOnInit(): void { }

}
