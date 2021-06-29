import { Component, OnInit } from '@angular/core';
import { Animal, IAnimal } from 'src/app/shared';

@Component({
    selector: 'app-task-one',
    templateUrl: './task-one.component.html',
    styleUrls: ['./task-one.component.scss']
})
export class TaskOneComponent implements OnInit {
    animals: IAnimal[] = [
        new Animal({ species: 'cat', sound: 'meow' }),
        new Animal({ species: 'sheep', sound: 'baa' }),
        new Animal({ species: 'hen', sound: 'cluck' }),
        new Animal({ species: 'pig', sound: 'oink' }),
        new Animal({ species: 'horse', sound: 'neigh' }),
    ];

    constructor() { }

    ngOnInit(): void { }

}
