import { Injectable } from '@angular/core';

import { JsonConvert } from "json2typescript";

// Would use a HttpClient but Angular can't resolve it because I'm in a service
import * as data from 'src/database/classes.json';
import { Class } from 'src/model/class/class';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    classes: Array<Class> = new Array<Class>();

    constructor() {
        
        let jsonConvert = new JsonConvert();
        this.classes = jsonConvert.deserializeArray(data.classes, Class);

    }

}