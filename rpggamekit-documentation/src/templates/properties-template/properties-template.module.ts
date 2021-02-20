import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PropertiesTemplateComponent } from './properties-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		PropertiesTemplateComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule
	],
    exports: [
        PropertiesTemplateComponent
    ],
	providers: [],
	bootstrap: []
})
export class PropertiesTemplateModule { }