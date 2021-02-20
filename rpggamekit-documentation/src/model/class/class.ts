import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Property")
export class Property {

    @JsonProperty("name", String)
    name: string = "";

    @JsonProperty("type", String)
    type: string = "";

    @JsonProperty("default", String)
    default: string = "";

    @JsonProperty("label", String)
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

    @JsonProperty("name", String)
    name: string = "";

    @JsonProperty("properties", [Property])
    properties: Array<Property> = [];

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

        return str;
    }

}



@JsonObject("Class")
export class Class {

    @JsonProperty("name", String, true)
    name: String = "";
    
    @JsonProperty("description", String, true)
    description: string = "";

    // @JsonProperty("superclasses", [String])
    superclasses: Array<string> = [];

    // @JsonProperty("initializers", [Method])
    initializers: Array<Method> = [];

    // @JsonProperty("properties", [Property])
    properties: Array<Property> = [];

    // @JsonProperty("methods", [Method])
    methods: Array<Method> = [];

    constructor() {}

    getDeclaration() : string {
        var str = ""//`class ${this.name}`;

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
}