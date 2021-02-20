import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InitializersTemplateComponent } from './initializers-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		InitializersTemplateComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule
	],
    exports: [
        InitializersTemplateComponent
    ],
	providers: [],
	bootstrap: []
})
export class InitializersTemplateModule { }