import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MethodsTemplateComponent } from './methods-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		MethodsTemplateComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule
	],
    exports: [
        MethodsTemplateComponent
    ],
	providers: [],
	bootstrap: []
})
export class MethodsTemplateModule { }