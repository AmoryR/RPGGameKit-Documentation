import { Component, Input, OnInit } from '@angular/core';

import { Class, Method } from 'src/model/class/class';

@Component({
	selector: 'app-methods-template',
	templateUrl: './methods-template.component.html',
	styleUrls: ['./methods-template.component.scss']
})
export class MethodsTemplateComponent implements OnInit {

	@Input() class: Class = new Class();

	keys: Array<string> = new Array<string>();
	stringtifyCategories: { [id: string]: Array<string> } = {};

	ngOnInit() {

		let categories = this.class.getMethodsByCategory();
		this.keys = Object.keys(categories);

		this.keys.forEach(key => {

			if (this.stringtifyCategories[key] == undefined) {
				this.stringtifyCategories[key] = new Array<string>();
			}
			categories[key].forEach(method => {
				this.stringtifyCategories[key].push(method.toString());
			});
		});

    }

}