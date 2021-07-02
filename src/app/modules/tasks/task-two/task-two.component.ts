import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Bee, Cat, Duck, Hen, Horse, IAnimal, Pig, Sheep } from 'src/app/shared';

@Component({
    selector: 'app-task-two',
    templateUrl: './task-two.component.html',
    styleUrls: ['./task-two.component.scss'],
})
export class TaskTwoComponent implements OnInit {
    pageTitle = 'Task two - manual mode';

    formData: FormGroup;

    filteredAnimals: IAnimal[] = [];

    allAnimals: IAnimal[] = [new Bee(), new Cat(), new Duck(), new Hen(), new Horse(), new Pig(), new Sheep()];

    selectedAnimals: IAnimal[] = [];

    constructor(private _titleService: Title, private _fb: FormBuilder) {
        this._titleService.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.formData = this._fb.group({
            selected_animals: this._fb.control([], [Validators.required]),
        });
    }

    getAnimalInfo(animal: IAnimal): string {
        return `${animal.species} - ${animal.getSound()}`;
    }

    filterAnimal(event): void {
        this.filteredAnimals = this.allAnimals.filter((x) =>
            x.species.toLowerCase().startsWith(event.query.toLowerCase())
        );
    }

    generateSong(): void {
        this.selectedAnimals = this.formData.value['selected_animals'];
    }

    resetForm(): void {
        this.formData.reset();
        this.selectedAnimals = [];
    }
}
