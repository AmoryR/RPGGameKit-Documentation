import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/services/database.service';

import { Tutorial } from 'src/model/tutorial/tutorial';

@Component({
	selector: 'app-tutorials-list',
	templateUrl: './tutorials-list.component.html',
	styleUrls: ['./tutorials-list.component.scss']
})
export class TutorialsListComponent implements OnInit {

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
