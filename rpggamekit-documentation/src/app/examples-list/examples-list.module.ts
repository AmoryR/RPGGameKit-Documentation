import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExamplesListComponent } from './examples-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
	declarations: [
		ExamplesListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

        MatListModule,
        MatDividerModule
	],
    exports: [
        ExamplesListComponent
    ],
	providers: [],
	bootstrap: []
})
export class ExamplesListModule { }
