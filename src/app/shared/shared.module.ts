import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// shared components
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SongComponent } from './components/song/song.component';
import { VerseComponent } from './components/verse/verse.component';

// pipes
import { StartWithVowelPipe } from './pipes';

// third party
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [
        // shared components
        PageHeaderComponent,
        SongComponent,
        VerseComponent,

        // pipes
        StartWithVowelPipe,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        // third party
        AutoCompleteModule,
        ButtonModule,
        CardModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,

        // shared components
        PageHeaderComponent,
        SongComponent,
        VerseComponent,

        // pipes
        StartWithVowelPipe,

        // third party
        AutoCompleteModule,
        ButtonModule,
        CardModule
    ]
})
export class SharedModule {

}
