
export class Method {

    name: string;
    properties: Array<Property>;

    constructor(name: string = "", properties: Array<Property> = []) {
        this.name = name;
        this.properties = properties;
    }

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

export class Property {

    name: string = "";
    type: string = "";
    defaultValue: string = "";
    isConst: boolean = false;
    label: string = "";
    
    constructor(name: string, type: string, defaultValue: string, isConst: boolean, label: string = "") {
        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
        this.isConst = isConst;
        this.label = label;
    }

    toString(): string {

        var str = `${this.name}: ${this.type}`;

        if (this.defaultValue.length != 0) {
            str += ` = ${this.defaultValue}`;
        }

        return str;
    }

}

export interface Class {

    initializers: Array<Method>;
    properties: Array<Property>;
    methods: Array<Method>;

}

/* Test */
export class Entity implements Class {

    name: String
    initializers: Array<Method>;
    properties: Array<Property>;
    methods: Array<Method>;

    constructor(name: String, initializers: Array<Method>, properties: Array<Property>, methods: Array<Method>) {
        this.name = name;
        this.initializers = initializers;
        this.properties = properties;
        this.methods = methods;
    }


}