import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// Drawer setting
	// Should change drawer mode on some screen size
	mode: MatDrawerMode = "side";
	opened: boolean = false;

	constructor(
		private router: Router
	) {}

	show(page: string) {
		this.router.navigate([page]);
	}

}
