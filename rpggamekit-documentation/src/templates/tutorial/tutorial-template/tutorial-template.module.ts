import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TutorialTemplateComponent } from './tutorial-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		TutorialTemplateComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule
	],
    exports: [
        TutorialTemplateComponent
    ],
	providers: [],
	bootstrap: []
})
export class TutorialTemplateModule { }