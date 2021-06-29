import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartWithVowelPipe } from './pipes';



@NgModule({
    declarations: [StartWithVowelPipe],
    imports: [
        CommonModule
    ],
    exports: [StartWithVowelPipe]
})
export class SharedModule { }
