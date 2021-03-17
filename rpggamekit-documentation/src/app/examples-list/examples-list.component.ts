import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/services/database.service';

import { Tutorial } from 'src/model/tutorial/tutorial';

@Component({
	selector: 'app-examples-list',
	templateUrl: './examples-list.component.html',
	styleUrls: ['./examples-list.component.scss']
})
export class ExamplesListComponent implements OnInit {

    //tutorial: Tutorial = new Tutorial();
    tutorials: Array<Tutorial> = new Array<Tutorial>();

    constructor(
        private databaseService: DatabaseService,
        private router: Router
    ) {}

    ngOnInit() {
        //this.tutorial = Tutorial.getMock();
        this.tutorials = this.databaseService.tutorials;
    }

    show(tutorialId: number) {
        this.router.navigate([`tutorial/${tutorialId}`]);
    }

}
