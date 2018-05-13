import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
/* we can get a ngForm reference using ViewChild decorator */
@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  //@Output() recipeCreated = new EventEmitter<{recipeName: string, recipeSubtitle: string, recipeContent: string}>();
  @Output() recipeCreated = new EventEmitter<any>();
  newRecipeName = '';
  newRecipeSubtitle = '';
  newRecipeContent = '';

  @ViewChild('f') form: any;

  constructor() { }

  ngOnInit() {
  }

  onAddRecipe () {
    if(this.form.invalid) {
      return;
    }
    //f.form.value will give form object we can emit it
    this.recipeCreated.emit({
      title : this.newRecipeName,
      subTitle: this.newRecipeSubtitle,
      description : this.newRecipeContent
    });
    this.form.reset(); // f.reset();
  }
  /*onAddRecipe (f) {
    if(f.invalid) {
      return;
    }
    //f.form.value will give form object we can emit it
    this.recipeCreated.emit({
      title : this.newRecipeName,
      subTitle: this.newRecipeSubtitle,
      description : this.newRecipeContent
    });
    f.resetForm(); // f.reset();
  }*/
}
