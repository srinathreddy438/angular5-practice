import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

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
import { ProgressiveFormComponent } from './progressive-form/progressive-form.component';
import { ApiInfoComponent } from './api-info/api-info.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
//search artist list
import { SearchComponent } from './search/search.component';
//particular artist details
import { ArtistComponent } from './artist/artist.component';
//particular artist track list
import { ArtistTrackListComponent } from './artist/artist-track-list/artist-track-list.component';
//particular artist album list
import { ArtistAlbumListComponent } from './artist/artist-album-list/artist-album-list.component';


//custom pipes
import { SqrtPipe } from './pipes/app.sqrt';

//custom directives
import { HighlightDirective } from './directives/my-highlight-directive';

//services
import { RecipeService } from './service/recipe.service';
import { SearchService } from './service/search.service';
import { UserService } from './service/user.service';
//guard services
import { AlwaysAuthGuard } from './guards/always-auth-guard';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users-guard';
import { AlwaysAuthChildrenGuard } from './guards/always-auth-children-guard';



@NgModule({
  declarations: [
    //pipes
    SqrtPipe,
    //custom directives
    HighlightDirective,
    //components
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
    ProgressiveFormComponent,
    ApiInfoComponent,
    TestRoutingComponent,
    SearchComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
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
        path: 'progressive-form', 
        component: ProgressiveFormComponent 
      },
      { 
        path: 'api-info', 
        component: ApiInfoComponent 
      },
      { 
        path: 'test-routing', 
        component: TestRoutingComponent 
      },
      {
        path: 'artist',
        component: SearchComponent
      },
      {
        path: 'artist/:artistId',
        component: ArtistComponent,
        canActivate: [AlwaysAuthGuard, OnlyLoggedInUsersGuard],
        canActivateChild: [AlwaysAuthChildrenGuard],
        children: [
          //{path: '', redirectTo: 'tracks', pathMatch: 'full'}, 
          {path: 'tracks', component: ArtistTrackListComponent}, 
          {path: 'albums', component: ArtistAlbumListComponent}
        ]
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    RecipeService, 
    SearchService,
    UserService,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard,
    AlwaysAuthChildrenGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
