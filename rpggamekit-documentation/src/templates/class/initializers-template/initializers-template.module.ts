import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InitializersTemplateComponent } from './initializers-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [
		InitializersTemplateComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		MatListModule,
		MatCardModule
	],
    exports: [
        InitializersTemplateComponent
    ],
	providers: [],
	bootstrap: []
})
export class InitializersTemplateModule { }