import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassTemplateComponent } from 'src/templates/class/class-template/class-template.component';
import { ClassesListComponent } from 'src/app/classes-list/classes-list.component';
import { TutorialsListComponent } from 'src/app/tutorials-list/tutorials-list.component';
import { TutorialTemplateComponent } from 'src/templates/tutorial/tutorial-template/tutorial-template.component';

const routes: Routes = [
	{
		path: 'class/:name',
		component: ClassTemplateComponent
	},
	{
		path: 'classes',
		component: ClassesListComponent
	},
	{
		path: 'tutorial/:id',
		component: TutorialTemplateComponent
	},
	{
		path: 'tutorials',
		component: TutorialsListComponent
	},
	{
		path: '',
		component: ClassesListComponent
	},
	{
		// Create a not found error 404 ??
		path: 'error',
		component: ClassesListComponent
	},
	{
		path: '**',
		redirectTo: 'error'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
