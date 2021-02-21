import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassesListComponent } from 'src/app/classes-list/classes-list.component';
import { ClassTemplateComponent } from 'src/templates/class-template/class-template.component';

const routes: Routes = [
	{
		path: 'class/:name',
		component: ClassTemplateComponent
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
