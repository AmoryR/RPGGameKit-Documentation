import { Component, Input, OnInit } from '@angular/core';

import { Method } from 'src/model/class/class';

@Component({
	selector: 'app-methods-template',
	templateUrl: './methods-template.component.html',
	styleUrls: ['./methods-template.component.scss']
})
export class MethodsTemplateComponent implements OnInit {

	@Input() methods: Array<Method> = new Array<Method>();

    stringtifyMethods: Array<string> = new Array<string>();

	ngOnInit() {
        
        this.methods.forEach((method) => {

            this.stringtifyMethods.push(method.toString());

        });

    }

}