import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PropertiesTemplateComponent } from './properties-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [
		PropertiesTemplateComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		MatListModule,
		MatCardModule
	],
    exports: [
        PropertiesTemplateComponent
    ],
	providers: [],
	bootstrap: []
})
export class PropertiesTemplateModule { }