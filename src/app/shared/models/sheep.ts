import { IAnimal } from '../interfaces';

export class Sheep implements IAnimal {
    species = 'sheep';

    constructor() { }

    getSound(): string {
        return 'baa';
    }

}