import { IAnimal } from '../interfaces';

export class Duck implements IAnimal {
    species = 'duck';

    constructor() { }

    getSound(): string {
        return 'quack';
    }
}