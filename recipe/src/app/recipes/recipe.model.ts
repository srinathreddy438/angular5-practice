/*export class Recipe {
    public title : string;
    public subTitle : string;
    public description : string;
    public image : string;
    constructor(title: string, subTitle: string, desc: string, image: string) {
        this.title = title;
        this.subTitle = subTitle;
        this.description = desc;
        this.image = image;
    }
}*/

// this will do same thing as above
export class Recipe {
    constructor(public title: string, public subTitle: string, public description: string, public image: string) { }
}
