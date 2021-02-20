import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClassTemplateComponent } from './class-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InitializersTemplateModule } from 'src/templates/initializers-template/initializers-template.module';
import { PropertiesTemplateModule } from 'src/templates/properties-template/properties-template.module';
import { MethodsTemplateModule } from 'src/templates/methods-template/methods-template.module';

import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [
		ClassTemplateComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

        InitializersTemplateModule,
        PropertiesTemplateModule,
        MethodsTemplateModule,

        MatDividerModule
	],
    exports: [
        ClassTemplateComponent
    ],
	providers: [],
	bootstrap: []
})
export class ClassTemplateModule { }