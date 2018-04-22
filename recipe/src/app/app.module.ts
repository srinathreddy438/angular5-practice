import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { PracticeComponent } from './practice/practice.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipes/recipe-Create/recipe-Create.component';

//custom pipes
import { SqrtPipe } from './pipes/app.sqrt';

//custom directives
import { HighlightDirective } from './directives/my-highlight-directive';

//services
import { RecipeService } from './service/recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    PracticeComponent,
    HeaderComponent,
    HomeComponent,
    SettingsComponent,
    HelpComponent,
    NotFoundComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeCreateComponent,
    SqrtPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { 
        path: 'practice', 
        component: PracticeComponent 
      },
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'home', 
        component: HomeComponent 
      },
      {
        path: 'recipe', 
        redirectTo: '/home', 
        pathMatch: 'full' 
      },
      { 
        path: 'settings', 
        component: SettingsComponent 
      },
      { 
        path: 'help', 
        component: HelpComponent 
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
