import { IAnimal } from '../interfaces';

export class Animal implements IAnimal {
    species: string;
    sound: string;

    constructor(data?: IAnimal) {
        if (data) {
            if (data['species']) this.species = data.species;
            if (data['sound']) this.sound = data.sound;
        }
    }
}
