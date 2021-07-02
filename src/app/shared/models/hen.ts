import { IAnimal } from '../interfaces';

export class Hen implements IAnimal {
    species = 'hen';

    constructor() {}

    getSound(): string {
        return 'cluck';
    }
}
