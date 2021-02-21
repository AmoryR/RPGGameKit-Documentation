import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClassesListComponent } from './classes-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
	declarations: [
		ClassesListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

        MatListModule,
        MatDividerModule
	],
    exports: [
        ClassesListComponent
    ],
	providers: [],
	bootstrap: []
})
export class ClassesListModule { }
