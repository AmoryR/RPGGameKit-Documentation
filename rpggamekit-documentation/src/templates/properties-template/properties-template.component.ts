import { Component, Input, OnInit } from '@angular/core';

import { Property } from 'src/model/class/class';

@Component({
	selector: 'app-properties-template',
	templateUrl: './properties-template.component.html',
	styleUrls: ['./properties-template.component.scss']
})
export class PropertiesTemplateComponent implements OnInit {

	@Input() properties: Array<Property> = new Array<Property>();

    stringtifyProperties: Array<string> = new Array<string>();

	ngOnInit() {
        
        this.properties.forEach((property) => {

            this.stringtifyProperties.push(property.toString());

        });

    }

}