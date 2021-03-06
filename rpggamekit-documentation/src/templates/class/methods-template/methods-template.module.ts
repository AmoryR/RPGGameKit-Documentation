import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MethodsTemplateComponent } from './methods-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [
		MethodsTemplateComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		MatListModule,
		MatCardModule,
		MatDividerModule
	],
    exports: [
        MethodsTemplateComponent
    ],
	providers: [],
	bootstrap: []
})
export class MethodsTemplateModule { }