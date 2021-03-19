import { JsonObject, JsonProperty } from "json2typescript";

export class Prerequisite {
    tutorial: Tutorial = new Tutorial();
}

@JsonObject("Step")
export class Step {

    @JsonProperty("title", String, true)
    title: string = "";

    description: string = "";

    @JsonProperty("code", String, true)
    code: string = "";

    constructor() {}

}

@JsonObject("Tutorial")
export class Tutorial {
    
    @JsonProperty("id", Number, true)
    id: number = -1;

    @JsonProperty("title", String, true)
    title: string = "";

    prerequisites: Array<Prerequisite> = new Array<Prerequisite>();

    @JsonProperty("steps", Step, true)
    steps: Array<Step> = new Array<Step>();

    constructor() {}

    static getMock(): Tutorial {

        let tutorial = new Tutorial();
        tutorial.title = "Create the main character"

        let step1 = new Step();
        step1.title = "Create an entity"
        step1.code = "self.mainCharacter = RPGEntity(textureName: \"Character\")"

        let step2 = new Step();
        step2.title = "Build physics"
        step2.code = "self.mainCharacter.buildPhysics()"

        let step3 = new Step();
        step3.title = "Add to scene"
        step3.code = "self.mainCharacter.add(to: self)"

        tutorial.steps = [
            step1,
            step2,
            step3
        ];

        return tutorial;
    }

}