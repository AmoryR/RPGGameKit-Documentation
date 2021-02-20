import { Component, Input, OnInit } from '@angular/core';
import { Method } from 'src/model/class/class';

@Component({
	selector: 'app-initializers-template',
	templateUrl: './initializers-template.component.html',
	styleUrls: ['./initializers-template.component.scss']
})
export class InitializersTemplateComponent implements OnInit {

    @Input() initializers: Array<Method> = new Array<Method>();

    stringtifyInitializers: Array<string> = new Array<string>();

    ngOnInit() {
        
        this.initializers.forEach((initializer) => {

            this.stringtifyInitializers.push(initializer.toString());

        });

    }


}