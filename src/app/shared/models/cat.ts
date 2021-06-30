import { IAnimal } from '../interfaces';

export class Cat implements IAnimal {
    species = 'cat';

    constructor() { }

    getSound(): string {
        return 'meow';
    }
}