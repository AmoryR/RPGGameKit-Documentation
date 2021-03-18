import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TutorialsListComponent } from './tutorials-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
	declarations: [
		TutorialsListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

        MatListModule,
        MatDividerModule
	],
    exports: [
        TutorialsListComponent
    ],
	providers: [],
	bootstrap: []
})
export class TutorialsListModule { }
