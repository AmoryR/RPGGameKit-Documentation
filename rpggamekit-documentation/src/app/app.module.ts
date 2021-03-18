import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Do I really need to import these ?
import { ClassTemplateModule } from 'src/templates/class/class-template/class-template.module';
import { MethodsTemplateModule } from 'src/templates/class/methods-template/methods-template.module';
import { ClassesListModule } from './classes-list/classes-list.module';
import { TutorialsListModule } from './tutorials-list/tutorials-list.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		ClassTemplateModule,
		MethodsTemplateModule,
		ClassesListModule,
		TutorialsListModule,

		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
