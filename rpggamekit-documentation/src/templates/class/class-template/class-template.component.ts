import { Component } from '@angular/core';

import { DatabaseService } from 'src/services/database.service';

import { Class, Method, Property } from 'src/model/class/class';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-class-template',
	templateUrl: './class-template.component.html',
	styleUrls: ['./class-template.component.scss']
})
export class ClassTemplateComponent {

    class: Class = new Class();
    declaration: string = "";

    constructor(
        private databaseService: DatabaseService,
        private route: ActivatedRoute
    ) {

        let className = this.route.snapshot.params.name;

        let classes = this.databaseService.getClassesWithName(className);
        if (classes.length != 0) { 
            this.class = classes[0];
            this.declaration = this.class.getDeclaration();
        } else {
            // Find a war to feedback that to class found for name className
            console.log("No class found");
        }

    }

}