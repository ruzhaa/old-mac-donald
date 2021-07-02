import { IAnimal } from '../interfaces';

export class Bee implements IAnimal {
    species = 'bee';

    constructor() {}

    getSound(): string {
        return 'buzz';
    }
}
