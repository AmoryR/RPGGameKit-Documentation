import { Component } from '@angular/core';

import { DatabaseService } from 'src/services/database.service';

import { ActivatedRoute } from '@angular/router';
import { Tutorial } from 'src/model/tutorial/tutorial';

@Component({
	selector: 'app-tutorial-template',
	templateUrl: './tutorial-template.component.html',
	styleUrls: ['./tutorial-template.component.scss']
})
export class TutorialTemplateComponent {

    tutorial: Tutorial = new Tutorial();

    constructor(
        private databaseService: DatabaseService,
        private route: ActivatedRoute
    ) {

        let tutorialId = this.route.snapshot.params.id;

        let tutorials = this.databaseService.getTutorialWithId(tutorialId);
        if (tutorials.length != 0) { 
            this.tutorial = tutorials[0];
        } else {
            // Find a war to feedback that to class found for name className
            console.log("No class found");
        }

    }

}