import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'startWithVowel',
})
export class StartWithVowelPipe implements PipeTransform {
    transform(value: string): unknown {
        return /^[aieouAIEOU]/i.test(value);
    }
}
