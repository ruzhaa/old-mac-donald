import { IAnimal } from '../interfaces';

export class Pig implements IAnimal {
    species = 'pig';

    constructor() { }

    getSound(): string {
        return 'oink';
    }
}