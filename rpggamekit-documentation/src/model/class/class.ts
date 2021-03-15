import { JsonObject, JsonProperty } from "json2typescript";

// Should be call variable
@JsonObject("Property")
export class Property {

    @JsonProperty("name", String, true)
    name: string = "";

    @JsonProperty("type", String, true)
    type: string = "";

    @JsonProperty("default", String, true)
    default: string = "";

    @JsonProperty("label", String, true)
    label: string = "";
    
    constructor() {}

    toString(): string {

        var str = `${this.name}: ${this.type}`;

        if (this.default.length != 0) {
            str += ` = ${this.default}`;
        }

        return str;
    }

}

@JsonObject("Method")
export class Method {

    @JsonProperty("name", String, true)
    name: string = "";

    @JsonProperty("return", String, true)
    return: string = "";

    // Should be call parameters
    @JsonProperty("properties", [Property], true)
    properties: Array<Property> = [];

    @JsonProperty("category", String, true)
    category: string = "";

    constructor() {}

    toString(): string {

        let str = `${this.name}(`;

        this.properties.forEach((propertie, index) => {

            if (propertie.label.length != 0) {
                str += (propertie.label + ' ')
            }
            
            str += `${propertie.name}: ${propertie.type}`;

            if (index != this.properties.length - 1) {
                str += ", ";
            }

        });

        str += ')';

        if (this.return.length != 0) {
            str += ` -> ${this.return}`;
        }

        return str;
    }

}



@JsonObject("Class")
export class Class {

    @JsonProperty("name", String, true)
    name: string = "";
    
    @JsonProperty("description", String, true)
    description: string = "";

    @JsonProperty("superclasses", [String], true)
    superclasses: Array<string> = [];

    @JsonProperty("initializers", [Method], true)
    initializers: Array<Method> = [];

    @JsonProperty("properties", [Property], true)
    properties: Array<Property> = [];

    @JsonProperty("methods", [Method], true)
    methods: Array<Method> = [];

    constructor() {}

    getDeclaration() : string {
        var str = `class ${this.name}`;

        if (this.superclasses.length != 0) {

            str += " : ";

            this.superclasses.forEach((heri, index) => {

                str += heri;

                if (index != this.superclasses.length - 1) {
                    str += ", ";
                }

            })

        }

        return str;
    }

    getMethodsByCategory() : { [id: string]: Array<Method> } {

        let orderedMethods: { [id: string]: Array<Method> } = {};

        this.methods.forEach(method => {

            if (!(method.category in orderedMethods)) {
                orderedMethods[method.category] = new Array<Method>();
            } 
            orderedMethods[method.category].push(method);

        });

        return orderedMethods;
    }
}