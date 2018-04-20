import { Injectable } from '@angular/core';
 
@Injectable() //we wish to inect this service in component thats why we are using Injectable method
export class RecipeService {
  //private defaultRecipe: string[] = ['alvin', 'simon', 'theodore'];
    private defaultRecipe = [{
    title: "Recipe1",
    subTitle: "Andhra Special",
    description: "A recipe is a set of instructions that describes how to prepare or make something, especially a culinary dish. It is also used in medicine or in information technology",
    image: "http://images.media-allrecipes.com/userphotos/720x405/3846491.jpg"
  }];
  constructor() { }
  getDefaultRecipe() {
    return this.defaultRecipe[0];
  }
}