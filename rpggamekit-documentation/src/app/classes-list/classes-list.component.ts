import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/model/class/class';
import { DatabaseService } from 'src/services/database.service';

@Component({
	selector: 'app-classes-list',
	templateUrl: './classes-list.component.html',
	styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

    classes: Array<Class> = new Array<Class>();

    constructor(
        private databaseService: DatabaseService,
        private router: Router
    ) {

    }

    ngOnInit() {

        this.classes = this.databaseService.classes;

    }

    show(className: string) {
        this.router.navigate([`class/${className}`]);
    }

}
