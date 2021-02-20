import { Component } from '@angular/core';

import { Entity, Method, Property } from 'src/model/class/class';

@Component({
	selector: 'app-class-template',
	templateUrl: './class-template.component.html',
	styleUrls: ['./class-template.component.scss']
})
export class ClassTemplateComponent {

    class: Entity;

    constructor() {

        let initializers: Array<Method> = [

            new Method("init", [
                new Property("color", "UIColor", "", false),
                new Property("size", "CGSize", "", false),
            ]),

            new Method("init", [
                new Property("textureName", "String", "", false)
            ])

        ];

        let properties: Array<Property> = [
            new Property("movementSpeed", "CGFloat", "40.0", false)
        ];

        let methods: Array<Method> = [

            new Method("move", [
                new Property("direction", "CGVector", "", false, "in")
            ]),

            new Method("updateVelocity", []),
            new Method("update", [])

        ];

        this.class = new Entity("Entity", initializers, properties, methods);

    }

}