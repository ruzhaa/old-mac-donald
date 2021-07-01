import { Component, Input, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/shared';

@Component({
    selector: 'app-verse',
    templateUrl: './verse.component.html',
    styleUrls: ['./verse.component.scss']
})
export class VerseComponent implements OnInit {
    @Input() animal: IAnimal;

    constructor() { }

    ngOnInit(): void {
    }

}
