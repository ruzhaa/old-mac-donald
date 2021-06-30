import { Component, Input, OnInit } from '@angular/core';
import { IAnimal } from '../../interfaces';

@Component({
    selector: 'app-song',
    templateUrl: './song.component.html',
    styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
    @Input() animals: IAnimal[];

    constructor() { }

    ngOnInit(): void {
    }

}
