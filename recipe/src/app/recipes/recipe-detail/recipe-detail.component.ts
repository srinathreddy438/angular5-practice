import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RecipeService } from '../../service/recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 /* recipe = {
    title: "Recipe1",
    subTitle: "Andhra Special",
    description: "A recipe is a set of instructions that describes how to prepare or make something, especially a culinary dish. It is also used in medicine or in information technology",
    image: "http://images.media-allrecipes.com/userphotos/720x405/3846491.jpg"
  };*/

  // name: string;
  recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    //this.name = this.recipeService.getUser();
    this.recipe = this.recipeService.getDefaultRecipe();
    this.recipeService.showDetails.subscribe((detail) => {
      this.recipe = detail;
    })
  }

}
