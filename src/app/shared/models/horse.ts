import { IAnimal } from '../interfaces';

export class Horse implements IAnimal {
    species = 'horse';

    constructor() { }

    getSound(): string {
        return 'neigh';
    }

}