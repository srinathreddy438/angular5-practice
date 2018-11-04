import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //1item pre defined in the array just for display purpose
  arr = [{
    title: "Recipe1 from main page",
    subTitle: "Andhra Special",
    description: "A recipe is a set of instructions that describes how to prepare or make something, especially a culinary dish. It is also used in medicine or in information technology",
    image: "http://images.media-allrecipes.com/userphotos/720x405/3846491.jpg"
  }];
  //onRecipeAdded (serverData: {recipeName: string, recipeSubtitle: string, recipeContent: string}) {
    onRecipeAdded (data) {
     console.log(data);
     data.image= "http://images.media-allrecipes.com/userphotos/720x405/3846491.jpg";
    this.arr.push(data);
  }

}
