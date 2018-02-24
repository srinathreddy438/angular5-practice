import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arr = [];
  //onRecipeAdded (serverData: {recipeName: string, recipeSubtitle: string, recipeContent: string}) {
    onRecipeAdded (data) {
     console.log(data);
     data.image= "http://images.media-allrecipes.com/userphotos/720x405/3846491.jpg";
    this.arr.push(data);
  }
}
