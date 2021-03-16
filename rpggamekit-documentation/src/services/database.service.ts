import { Injectable } from '@angular/core';

import { JsonConvert } from "json2typescript";

// Would use a HttpClient but Angular can't resolve it because I'm in a service
import * as classes from 'src/database/classes.json';
import * as tutorials from 'src/database/tutorials.json';
import { Class } from 'src/model/class/class';
import { Tutorial } from 'src/model/tutorial/tutorial';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    classes: Array<Class> = new Array<Class>();
    tutorials: Array<Tutorial> = new Array<Tutorial>();

    constructor() {
        
        let jsonConvert = new JsonConvert();
        this.classes = jsonConvert.deserializeArray(classes.classes, Class);
        this.tutorials = jsonConvert.deserializeArray(tutorials.tutorials, Tutorial);

    }

    /// Find a way to get a class or undefined 
    getClassesWithName(name: string) : Array<Class> {

        return this.classes.filter((value) => {
            return value.name == name;
        });
        
    }

}