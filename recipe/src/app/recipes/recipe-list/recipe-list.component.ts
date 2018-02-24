import { Component, OnInit , Input} from '@angular/core';
//model will have all declarations
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 arr = [1,2,3,4,5,6,7,8,9,10];
  /*recipes = [
    {
      title: "Recipe1",
      subTitle: "Andhra Special",
      description: "A recipe is a set of instructions that describes how to prepare or make something, especially a culinary dish. It is also used in medicine or in information technology",
      image: "http://images.media-allrecipes.com/userphotos/720x405/3846491.jpg"
    },
    {
      title: "Recipe2",
      subTitle: "Andhra Special",
      description: "A recipe is a set of instructions that describes how to prepare or make something, especially a culinary dish. It is also used in medicine or in information technology",
      image: "https://dish-environment-prod-contentbucket-10u8bszryovz3.s3.amazonaws.com/assets/s3fs-public/styles/content_image_x_large/public/2043291_-Slow-Cooker-Vegetarian-Minestrone-Photo-by-Karolina.jpg?itok=NmjOOxNW"
    }
  ];*/
  // load data from model
  @Input() recipes : Recipe[] = [
    new Recipe("Recipe1", "Andhra Special", "A recipe is a set of instructions that describes how to prepare or make something, especially a culinary dish. It is also used in medicine or in information technology", "http://images.media-allrecipes.com/userphotos/720x405/3846491.jpg"),
    new Recipe("Recipe2", "Andhra Special", "A recipe is a set of instructions that describes how to prepare or make something, especially a culinary dish. It is also used in medicine or in information technology", "https://dish-environment-prod-contentbucket-10u8bszryovz3.s3.amazonaws.com/assets/s3fs-public/styles/content_image_x_large/public/2043291_-Slow-Cooker-Vegetarian-Minestrone-Photo-by-Karolina.jpg?itok=NmjOOxNW")    
  ];

  constructor() { }

  ngOnInit() {
  }

}
