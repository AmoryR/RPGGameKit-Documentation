import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/model/tutorial/tutorial';

@Component({
	selector: 'app-examples-list',
	templateUrl: './examples-list.component.html',
	styleUrls: ['./examples-list.component.scss']
})
export class ExamplesListComponent implements OnInit {

    tutorial: Tutorial = new Tutorial();

    constructor() {}

    ngOnInit() {
        this.tutorial = Tutorial.getMock();
    }

}
