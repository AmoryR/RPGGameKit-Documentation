import { Component } from '@angular/core';

import { DatabaseService } from 'src/services/database.service';

import { Class, Method, Property } from 'src/model/class/class';

@Component({
	selector: 'app-class-template',
	templateUrl: './class-template.component.html',
	styleUrls: ['./class-template.component.scss']
})
export class ClassTemplateComponent {

    class: Class = new Class();
    declaration: string = "";

    constructor(
        private databaseService: DatabaseService
    ) {

        let classes = this.databaseService.getClassesWithName("Entity");
        if (classes.length != 0) { 
            this.class = classes[0];
        }

    }

}