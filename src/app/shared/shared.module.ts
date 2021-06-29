import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartWithVowelPipe } from './pipes';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        StartWithVowelPipe,
        PageHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        StartWithVowelPipe,
        PageHeaderComponent
    ]
})
export class SharedModule {

}
